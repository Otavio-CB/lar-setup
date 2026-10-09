<template>
  <main class="my-6 space-y-4">
    <div class="p-4 bg-white border border-zinc-200 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 class="text-sm font-semibold text-zinc-900">Laudo de Vistoria de Entrada</h2>
        <p class="text-xs text-zinc-500">Documente defeitos pré-existentes para contestar no prazo legal (48h a 7 dias).</p>
      </div>
      <button @click="abrirModalVistoria()" class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition shadow-xs self-start sm:self-auto">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Registrar Apontamento
      </button>
    </div>

    <div class="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xs divide-y divide-zinc-100">
      <div v-if="vistoria.length === 0" class="text-center py-12 text-xs text-zinc-500">
        Nenhuma pendência física registrada até o momento.
      </div>

      <div v-for="item in vistoria" :key="item.id" class="p-4 sm:px-6 hover:bg-zinc-50/70 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-medium text-sm text-zinc-900">{{ item.defeito }}</span>
            <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
              {{ item.comodo }}
            </span>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded border" :class="classeGravidade(item.gravidade)">
              Gravidade: {{ item.gravidade }}
            </span>
          </div>
          <p v-if="item.detalhe" class="text-xs text-zinc-500 mt-1">{{ item.detalhe }}</p>
          <p v-if="item.prazo" class="text-[11px] text-zinc-400 mt-1 font-medium">Prazo limite: {{ item.prazo }}</p>
        </div>

        <div class="flex items-center gap-3 self-end sm:self-center shrink-0">
          <select
            v-model="item.status"
            class="text-xs font-medium px-2.5 py-1.5 rounded-lg border outline-none"
            :class="item.status === 'Resolvido' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-zinc-100 text-zinc-700 border-zinc-300'"
          >
            <option value="Pendente">Pendente de Reparo</option>
            <option value="Notificado">Notificado Formalmente</option>
            <option value="Resolvido">Resolvido</option>
          </select>

          <button @click="removerVistoria(item.id)" class="p-1 text-zinc-400 hover:text-rose-600 rounded">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { vistoria, abrirModalVistoria, removerVistoria } from '../../stores/appState';
import { classeGravidade } from '../../utils/formatadores';
</script>
