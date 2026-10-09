import { watch, nextTick } from 'vue';
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { user, autorizado } from './useAuth';
import { exibirToast } from './useToast';
import {
  itens, mala48h, feiraDia1, contatosCondominio, tarefasMudanca, medidas, vistoria,
  obterPayload, carregarPayload,
} from '../stores/appState';
import {
  ITENS_PADRAO, MALA_48H_PADRAO, FEIRA_DIA1_PADRAO, TAREFAS_PADRAO, MEDIDAS_PADRAO, VISTORIA_PADRAO,
} from '../constants/dadosPadrao';

const STORAGE_KEY = 'central_primeiro_imovel_v3_sem_moveis';
const DEBOUNCE_MS = 800;

// Documento único e compartilhado entre todas as contas autorizadas (ver firestore.rules).
const docRefDadosCompartilhados = () => doc(db, 'dados', 'compartilhado');

let unsubscribeSnapshot = null;
let sincronizando = false;
let aplicandoRemoto = false;
let debounceTimer = null;
let sincronizacaoIniciada = false;

const lerPayloadLocalStorageOuPadrao = () => {
  const dados = localStorage.getItem(STORAGE_KEY);
  if (dados) {
    try {
      const p = JSON.parse(dados);
      return {
        payload: {
          itens: p.itens || ITENS_PADRAO,
          mala48h: p.mala48h || MALA_48H_PADRAO,
          feiraDia1: p.feiraDia1 || FEIRA_DIA1_PADRAO,
          contatosCondominio: p.contatosCondominio || { portaria: '', zelador: '', chaveiro: '', horarioMudanca: '' },
          tarefasMudanca: p.tarefasMudanca || TAREFAS_PADRAO,
          medidas: p.medidas || MEDIDAS_PADRAO,
          vistoria: p.vistoria || VISTORIA_PADRAO,
        },
        migradoDoLocalStorage: true,
      };
    } catch (e) {
      // arquivo corrompido, cai para os dados padrão
    }
  }
  return {
    payload: {
      itens: ITENS_PADRAO,
      mala48h: MALA_48H_PADRAO,
      feiraDia1: FEIRA_DIA1_PADRAO,
      contatosCondominio: { portaria: '', zelador: '', chaveiro: '', horarioMudanca: '' },
      tarefasMudanca: TAREFAS_PADRAO,
      medidas: MEDIDAS_PADRAO,
      vistoria: VISTORIA_PADRAO,
    },
    migradoDoLocalStorage: false,
  };
};

const pararSincronizacaoAtual = () => {
  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
    unsubscribeSnapshot = null;
  }
  sincronizando = false;
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
};

const iniciarParaUsuarioAutorizado = async () => {
  const docRef = docRefDadosCompartilhados();
  try {
    const snap = await getDoc(docRef);
    if (!snap.exists()) {
      const { payload, migradoDoLocalStorage } = lerPayloadLocalStorageOuPadrao();
      await setDoc(docRef, { ...payload, atualizadoEm: serverTimestamp() });
      aplicandoRemoto = true;
      carregarPayload(payload);
      nextTick(() => { aplicandoRemoto = false; });
      if (migradoDoLocalStorage) {
        exibirToast('Dados locais migrados para a nuvem.');
      }
    } else {
      aplicandoRemoto = true;
      carregarPayload(snap.data());
      nextTick(() => { aplicandoRemoto = false; });
    }
  } catch (err) {
    exibirToast('Erro ao sincronizar dados.');
    return;
  }

  sincronizando = true;
  unsubscribeSnapshot = onSnapshot(docRef, (snap) => {
    if (!snap.exists()) return;
    aplicandoRemoto = true;
    carregarPayload(snap.data());
    nextTick(() => { aplicandoRemoto = false; });
  }, () => {
    exibirToast('Erro ao sincronizar dados.');
  });
};

const agendarEnvio = () => {
  if (aplicandoRemoto || !sincronizando) return;
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(async () => {
    if (!sincronizando) return;
    try {
      await setDoc(docRefDadosCompartilhados(), { ...obterPayload(), atualizadoEm: serverTimestamp() });
    } catch (err) {
      exibirToast('Erro ao sincronizar dados.');
    }
  }, DEBOUNCE_MS);
};

export const iniciarSincronizacao = () => {
  if (sincronizacaoIniciada) return;
  sincronizacaoIniciada = true;

  watch(user, (u) => {
    pararSincronizacaoAtual();
    if (u && autorizado.value) {
      iniciarParaUsuarioAutorizado();
    }
  }, { immediate: true });

  watch(
    [itens, mala48h, feiraDia1, contatosCondominio, tarefasMudanca, medidas, vistoria],
    () => { agendarEnvio(); },
    { deep: true }
  );
};
