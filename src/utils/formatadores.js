export const formatarMoeda = (val) => {
  if (!val || isNaN(val)) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
};

export const statusClasses = (st) => {
  switch (st) {
    case 'Comprado': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    case 'Ganho': return 'bg-blue-50 text-blue-800 border-blue-200';
    case 'Reservado': return 'bg-amber-50 text-amber-800 border-amber-200';
    default: return 'bg-zinc-100 text-zinc-700 border-zinc-300';
  }
};

export const classeFase = (fase) => {
  switch (fase) {
    case 'Fase 1: Dia Zero': return 'bg-rose-50 text-rose-700 border-rose-200';
    case 'Fase 2: Estrutura': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    default: return 'bg-zinc-100 text-zinc-600 border-zinc-200';
  }
};

export const classeGravidade = (g) => {
  switch (g) {
    case 'Alta': return 'bg-rose-50 text-rose-700 border-rose-200';
    case 'Média': return 'bg-amber-50 text-amber-800 border-amber-200';
    default: return 'bg-zinc-100 text-zinc-600 border-zinc-200';
  }
};
