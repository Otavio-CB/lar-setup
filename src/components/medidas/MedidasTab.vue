<template>
  <main class="my-6 space-y-4">
    <div class="p-4 bg-white border border-zinc-200 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 class="text-sm font-semibold text-zinc-900">Trena Digital (Medidas dos Vãos)</h2>
        <p class="text-xs text-zinc-500">Útil para checar se geladeira, máquina e colchões passam pelas portas e nichos.</p>
      </div>
      <button @click="abrirModalMedida()" class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition shadow-xs self-start sm:self-auto">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Nova Medida
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="m in medidas" :key="m.id" class="bg-white border border-zinc-200 rounded-xl p-4 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-sm font-semibold text-zinc-900">{{ m.local }}</h3>
            <button @click="removerMedida(m.id)" class="text-zinc-400 hover:text-rose-600">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <p class="text-xs text-zinc-500 mt-1">{{ m.descricao }}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-zinc-100 flex items-baseline justify-between">
          <span class="text-xs uppercase font-medium text-zinc-400">Dimensão Limite:</span>
          <span class="text-sm font-bold text-zinc-900">{{ m.dimensoes }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { medidas, abrirModalMedida, removerMedida } from '../../stores/appState';
</script>
