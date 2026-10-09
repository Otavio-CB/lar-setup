import { ref, computed } from 'vue';
import { exibirToast } from '../composables/useToast';
import {
  CATEGORIAS,
  ITENS_PADRAO,
  MALA_48H_PADRAO,
  FEIRA_DIA1_PADRAO,
  TAREFAS_PADRAO,
  MEDIDAS_PADRAO,
  VISTORIA_PADRAO,
} from '../constants/dadosPadrao';

export const categorias = CATEGORIAS;

export const abaAtiva = ref('itens'); // 'itens', 'operacao', 'checklist', 'medidas', 'vistoria'
export const itens = ref([]);
export const mala48h = ref([]);
export const feiraDia1 = ref([]);
export const contatosCondominio = ref({ portaria: '', zelador: '', chaveiro: '', horarioMudanca: '' });
export const tarefasMudanca = ref([]);
export const medidas = ref([]);
export const vistoria = ref([]);

// Filtros
export const filtroBusca = ref('');
export const filtroCategoria = ref('');
export const filtroFase = ref('');
export const filtroStatus = ref('Todos');

// Modais
export const modalItemAberto = ref(false);
export const editandoItemId = ref(null);
const formItemPadrao = { nome: '', categoria: 'Ferramentas & Reparos', fase: 'Fase 1: Dia Zero', voltagem: '', status: 'A Comprar', quantidade: 1, precoEstimado: null, precoPago: null, observacao: '' };
export const formItem = ref({ ...formItemPadrao });

export const modalMedidaAberto = ref(false);
export const formMedida = ref({ local: '', dimensoes: '', descricao: '' });

export const modalVistoriaAberto = ref(false);
export const formVistoria = ref({ comodo: '', defeito: '', gravidade: 'Média', prazo: '', status: 'Pendente' });

// Payload / carregamento (desacopla o estado de localStorage/Firestore)
export const obterPayload = () => ({
  itens: itens.value,
  mala48h: mala48h.value,
  feiraDia1: feiraDia1.value,
  contatosCondominio: contatosCondominio.value,
  tarefasMudanca: tarefasMudanca.value,
  medidas: medidas.value,
  vistoria: vistoria.value,
});

export const carregarPayload = (p) => {
  p = p || {};
  itens.value = p.itens || ITENS_PADRAO;
  mala48h.value = p.mala48h || MALA_48H_PADRAO;
  feiraDia1.value = p.feiraDia1 || FEIRA_DIA1_PADRAO;
  contatosCondominio.value = p.contatosCondominio || { portaria: '', zelador: '', chaveiro: '', horarioMudanca: '' };
  tarefasMudanca.value = p.tarefasMudanca || TAREFAS_PADRAO;
  medidas.value = p.medidas || MEDIDAS_PADRAO;
  vistoria.value = p.vistoria || VISTORIA_PADRAO;
};

export const restaurarTudoPadrao = () => {
  itens.value = JSON.parse(JSON.stringify(ITENS_PADRAO));
  mala48h.value = JSON.parse(JSON.stringify(MALA_48H_PADRAO));
  feiraDia1.value = JSON.parse(JSON.stringify(FEIRA_DIA1_PADRAO));
  contatosCondominio.value = { portaria: '', zelador: '', chaveiro: '', horarioMudanca: '' };
  tarefasMudanca.value = JSON.parse(JSON.stringify(TAREFAS_PADRAO));
  medidas.value = JSON.parse(JSON.stringify(MEDIDAS_PADRAO));
  vistoria.value = JSON.parse(JSON.stringify(VISTORIA_PADRAO));
  exibirToast('Base de dados atualizada.');
};

export const restaurarTarefasPadrao = () => {
  tarefasMudanca.value = JSON.parse(JSON.stringify(TAREFAS_PADRAO));
  exibirToast('Checklist restaurado.');
};

// Computados
export const totalItens = computed(() => itens.value.length);
export const itensAdquiridos = computed(() => itens.value.filter(i => i.status === 'Comprado' || i.status === 'Ganho').length);
export const pendentesFase1 = computed(() => itens.value.filter(i => i.fase === 'Fase 1: Dia Zero' && (i.status === 'A Comprar' || i.status === 'Reservado')).length);
export const progressoPercentual = computed(() => totalItens.value ? Math.round((itensAdquiridos.value / totalItens.value) * 100) : 0);
export const totalGasto = computed(() => itens.value.reduce((acc, cur) => acc + ((cur.precoPago || 0) * cur.quantidade), 0));
export const totalEstimadoRestante = computed(() => itens.value.filter(i => i.status === 'A Comprar' || i.status === 'Reservado').reduce((acc, cur) => acc + ((cur.precoEstimado || 0) * cur.quantidade), 0));

export const tarefas48hConcluidas = computed(() => mala48h.value.filter(m => m.pronto).length);
export const tarefasConcluidas = computed(() => tarefasMudanca.value.filter(t => t.feita).length);
export const vistoriaPendentes = computed(() => vistoria.value.filter(v => v.status !== 'Resolvido').length);

export const abasStatus = computed(() => [
  { rotulo: 'Todos', valor: 'Todos', contagem: totalItens.value },
  { rotulo: 'A Comprar', valor: 'A Comprar', contagem: itens.value.filter(i => i.status === 'A Comprar').length },
  { rotulo: 'Reservados', valor: 'Reservado', contagem: itens.value.filter(i => i.status === 'Reservado').length },
  { rotulo: 'Comprados', valor: 'Comprado', contagem: itens.value.filter(i => i.status === 'Comprado').length },
  { rotulo: 'Ganhos', valor: 'Ganho', contagem: itens.value.filter(i => i.status === 'Ganho').length },
]);

export const itensFiltrados = computed(() => {
  return itens.value.filter(item => {
    const matchesBusca = item.nome.toLowerCase().includes(filtroBusca.value.toLowerCase()) || (item.observacao && item.observacao.toLowerCase().includes(filtroBusca.value.toLowerCase()));
    const matchesCat = !filtroCategoria.value || item.categoria === filtroCategoria.value;
    const matchesFase = !filtroFase.value || item.fase === filtroFase.value;
    const matchesStatus = filtroStatus.value === 'Todos' || item.status === filtroStatus.value;
    return matchesBusca && matchesCat && matchesFase && matchesStatus;
  });
});

export const gruposTarefas = computed(() => {
  const g = {};
  tarefasMudanca.value.forEach(t => {
    if (!g[t.grupo]) g[t.grupo] = { nome: t.grupo, tarefas: [] };
    g[t.grupo].tarefas.push(t);
  });
  return Object.values(g);
});

// Ações Itens
export const abrirModalItem = () => { editandoItemId.value = null; formItem.value = { ...formItemPadrao }; modalItemAberto.value = true; };
export const editarItem = (item) => { editandoItemId.value = item.id; formItem.value = { ...item }; modalItemAberto.value = true; };
export const salvarModalItem = () => {
  if (editandoItemId.value) {
    const idx = itens.value.findIndex(i => i.id === editandoItemId.value);
    if (idx !== -1) itens.value[idx] = { ...formItem.value, id: editandoItemId.value };
  } else {
    itens.value.unshift({ ...formItem.value, id: Date.now() });
  }
  modalItemAberto.value = false;
  exibirToast('Item salvo.');
};
export const removerItem = (id) => { itens.value = itens.value.filter(i => i.id !== id); };

// Ações Medidas
export const abrirModalMedida = () => { formMedida.value = { local: '', dimensoes: '', descricao: '' }; modalMedidaAberto.value = true; };
export const salvarModalMedida = () => {
  medidas.value.push({ ...formMedida.value, id: Date.now() });
  modalMedidaAberto.value = false;
  exibirToast('Medida adicionada.');
};
export const removerMedida = (id) => { medidas.value = medidas.value.filter(m => m.id !== id); };

// Ações Vistoria
export const abrirModalVistoria = () => { formVistoria.value = { comodo: '', defeito: '', gravidade: 'Média', prazo: '', status: 'Pendente' }; modalVistoriaAberto.value = true; };
export const salvarModalVistoria = () => {
  vistoria.value.unshift({ ...formVistoria.value, id: Date.now() });
  modalVistoriaAberto.value = false;
  exibirToast('Apontamento registrado.');
};
export const removerVistoria = (id) => { vistoria.value = vistoria.value.filter(v => v.id !== id); };
