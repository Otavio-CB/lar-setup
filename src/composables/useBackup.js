import { obterPayload, carregarPayload } from '../stores/appState';
import { exibirToast } from './useToast';

export const exportarBackup = () => {
  const payload = obterPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `primeiro-imovel-dados-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  exibirToast('Backup baixado com sucesso.');
};

export const importarBackup = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const p = JSON.parse(e.target.result);
      carregarPayload({ ...obterPayload(), ...p });
      exibirToast('Base de dados restaurada com sucesso.');
    } catch (err) {
      exibirToast('Arquivo inválido.');
    }
  };
  reader.readAsText(file);
};
