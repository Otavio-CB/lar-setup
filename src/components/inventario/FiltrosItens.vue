<template>
  <!-- Abas de Status -->
  <div class="flex flex-wrap items-center gap-1.5 mb-4 p-1 bg-zinc-200/60 rounded-xl border border-zinc-200/80 max-w-fit">
    <button
      v-for="aba in abasStatus"
      :key="aba.valor"
      @click="filtroStatus = aba.valor"
      class="px-3 py-1.5 text-xs font-medium rounded-lg transition"
      :class="filtroStatus === aba.valor ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-600 hover:text-zinc-900'"
    >
      {{ aba.rotulo }}
      <span class="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full" :class="filtroStatus === aba.valor ? 'bg-zinc-100 text-zinc-700' : 'bg-zinc-300/60 text-zinc-600'">
        {{ aba.contagem }}
      </span>
    </button>
  </div>

  <!-- Filtros e Barra de Ações -->
  <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 mb-6">
    <div class="relative flex-1">
      <svg class="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <input
        v-model="filtroBusca"
        type="text"
        placeholder="Buscar por nome, marca ou anotação..."
        class="w-full pl-9 pr-4 py-2 bg-white text-xs border border-zinc-300 rounded-lg outline-none focus:border-zinc-500 transition shadow-xs"
      >
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <select v-model="filtroFase" class="bg-white text-xs border border-zinc-300 rounded-lg px-3 py-2 outline-none shadow-xs text-zinc-700">
        <option value="">Todas as Fases</option>
        <option value="Fase 1: Dia Zero">Fase 1: Dia Zero</option>
        <option value="Fase 2: Estrutura">Fase 2: Estrutura</option>
        <option value="Fase 3: Conforto">Fase 3: Conforto</option>
      </select>

      <select v-model="filtroCategoria" class="bg-white text-xs border border-zinc-300 rounded-lg px-3 py-2 outline-none shadow-xs text-zinc-700">
        <option value="">Todos os Cômodos</option>
        <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
      </select>

      <button @click="abrirModalItem()" class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition shadow-xs">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Novo Item
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  abasStatus, filtroStatus, filtroBusca, filtroFase, filtroCategoria, categorias, abrirModalItem,
} from '../../stores/appState';
</script>
