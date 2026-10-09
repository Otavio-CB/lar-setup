export const CATEGORIAS = ['Ferramentas & Reparos', 'Quarto Casal', 'Cozinha & Preparo', 'Mesa Posta', 'Banheiro', 'Lavanderia & Limpeza', 'Eletrodomésticos', 'Sala de Estar'];

// Template de exemplo — edite ou remova pelo próprio app (botão de editar/lixeira na lista).
export const ITENS_PADRAO = [
  { id: 1, nome: 'Item de Exemplo (edite ou remova)', categoria: 'Ferramentas & Reparos', fase: 'Fase 1: Dia Zero', voltagem: '', status: 'A Comprar', quantidade: 1, precoEstimado: 100, precoPago: null, observacao: 'Este é um item de exemplo para mostrar o formato dos campos.' },
];

// Template de exemplo — marque como pronto ou edite direto no código se quiser mudar a lista fixa.
export const MALA_48H_PADRAO = [
  { id: 'm1', titulo: 'Item de Exemplo da Mala 48h', motivo: 'Exemplo de motivo/justificativa do item.', pronto: false },
];

// Template de exemplo da Feira do Dia 1.
export const FEIRA_DIA1_PADRAO = [
  { id: 'f1', nome: 'Item de Exemplo da Feira', comprado: false },
];

// Template de exemplo de tarefa/checklist de burocracia.
export const TAREFAS_PADRAO = [
  { id: 't1', grupo: 'Grupo de Exemplo', titulo: 'Tarefa de Exemplo (edite pelo código)', feita: false, dica: 'Exemplo de dica exibida abaixo da tarefa.' },
];

// Template de exemplo de medida de vão.
export const MEDIDAS_PADRAO = [
  { id: 1, local: 'Local de Exemplo', dimensoes: 'Ex: 80cm (L) x 200cm (A)', descricao: 'Exemplo de observação sobre a medida.' },
];

// Template de exemplo de apontamento de vistoria.
export const VISTORIA_PADRAO = [
  { id: 1, comodo: 'Cômodo de Exemplo', defeito: 'Defeito de Exemplo (edite ou remova)', gravidade: 'Média', prazo: 'Ex: Contestar em até 5 dias', status: 'Pendente' },
];
