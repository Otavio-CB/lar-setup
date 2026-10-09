<template>
  <nav class="flex border-b border-zinc-200 mt-6 gap-6 text-xs sm:text-sm font-medium overflow-x-auto pb-1">
    <button
      @click="abaAtiva = 'itens'"
      class="pb-3 transition shrink-0 flex items-center gap-2"
      :class="abaAtiva === 'itens' ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900 -mb-[2px]' : 'text-zinc-500 hover:text-zinc-800'"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
      Inventário & Enxoval
      <span class="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">{{ totalItens }}</span>
    </button>

    <button
      @click="abaAtiva = 'operacao'"
      class="pb-3 transition shrink-0 flex items-center gap-2"
      :class="abaAtiva === 'operacao' ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900 -mb-[2px]' : 'text-zinc-500 hover:text-zinc-800'"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
      Mala 48h & Despensa
      <span class="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">{{ tarefas48hConcluidas }}/{{ mala48h.length }}</span>
    </button>

    <button
      @click="abaAtiva = 'checklist'"
      class="pb-3 transition shrink-0 flex items-center gap-2"
      :class="abaAtiva === 'checklist' ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900 -mb-[2px]' : 'text-zinc-500 hover:text-zinc-800'"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      Burocracia & Instalações
      <span class="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">{{ tarefasConcluidas }}/{{ tarefasMudanca.length }}</span>
    </button>

    <button
      @click="abaAtiva = 'medidas'"
      class="pb-3 transition shrink-0 flex items-center gap-2"
      :class="abaAtiva === 'medidas' ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900 -mb-[2px]' : 'text-zinc-500 hover:text-zinc-800'"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
      Gabarito de Medidas
      <span class="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">{{ medidas.length }}</span>
    </button>

    <button
      @click="abaAtiva = 'vistoria'"
      class="pb-3 transition shrink-0 flex items-center gap-2"
      :class="abaAtiva === 'vistoria' ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900 -mb-[2px]' : 'text-zinc-500 hover:text-zinc-800'"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      Vistoria & Defeitos
      <span class="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">{{ vistoriaPendentes }}</span>
    </button>
  </nav>
</template>

<script setup>
import {
  abaAtiva, totalItens, mala48h, tarefas48hConcluidas, tarefasMudanca, tarefasConcluidas,
  medidas, vistoriaPendentes,
} from '../../stores/appState';
</script>
