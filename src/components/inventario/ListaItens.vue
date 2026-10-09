<template>
  <div class="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xs divide-y divide-zinc-100">
    <div v-if="itensFiltrados.length === 0" class="text-center py-16 px-4">
      <p class="text-xs text-zinc-500">Nenhum item localizado com os filtros selecionados.</p>
    </div>

    <div
      v-for="item in itensFiltrados"
      :key="item.id"
      class="p-4 sm:px-6 hover:bg-zinc-50/70 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-medium text-sm text-zinc-900 truncate" :class="{'line-through text-zinc-400': item.status === 'Comprado' || item.status === 'Ganho'}">
            {{ item.nome }}
          </span>
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded border" :class="classeFase(item.fase)">
            {{ item.fase }}
          </span>
          <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
            {{ item.categoria }}
          </span>
          <span v-if="item.voltagem" class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
            {{ item.voltagem }}
          </span>
        </div>

        <div class="flex items-center gap-4 text-xs text-zinc-500 mt-2 flex-wrap">
          <span>Qtd: <strong class="text-zinc-700 font-medium">{{ item.quantidade }} un.</strong></span>
          <span v-if="item.precoEstimado">Estimado: {{ formatarMoeda(item.precoEstimado * item.quantidade) }}</span>
          <span v-if="item.precoPago" class="text-zinc-900 font-semibold">Gasto Real: {{ formatarMoeda(item.precoPago * item.quantidade) }}</span>
          <a v-if="item.link" :href="item.link" target="_blank" class="text-zinc-600 hover:text-zinc-900 underline inline-flex items-center gap-1">
            Referência
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <p v-if="item.observacao" class="text-xs text-zinc-500 mt-1 italic line-clamp-1">
          {{ item.observacao }}
        </p>
      </div>

      <div class="flex items-center gap-3 self-end sm:self-center shrink-0">
        <select
          v-model="item.status"
          class="text-xs font-medium px-2.5 py-1.5 rounded-lg border outline-none transition"
          :class="statusClasses(item.status)"
        >
          <option value="A Comprar">A Comprar</option>
          <option value="Reservado">Reservado</option>
          <option value="Comprado">Comprado</option>
          <option value="Ganho">Ganho</option>
        </select>

        <div class="flex items-center border-l border-zinc-200 pl-2 gap-1">
          <button @click="editarItem(item)" class="p-1 text-zinc-400 hover:text-zinc-800 rounded">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </button>
          <button @click="removerItem(item.id)" class="p-1 text-zinc-400 hover:text-rose-600 rounded">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { itensFiltrados, editarItem, removerItem } from '../../stores/appState';
import { formatarMoeda, statusClasses, classeFase } from '../../utils/formatadores';
</script>
