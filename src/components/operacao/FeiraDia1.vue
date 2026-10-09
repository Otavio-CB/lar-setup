<template>
  <section class="bg-white border border-zinc-200 rounded-xl p-5 shadow-xs">
    <div class="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
      <div>
        <h2 class="text-sm font-semibold text-zinc-900">Feira do Dia 1 (Insumos Não Duráveis)</h2>
        <p class="text-xs text-zinc-500">Produtos de consumo para limpeza e primeiras refeições.</p>
      </div>
      <span class="text-xs font-semibold text-zinc-500">
        {{ feiraDia1.filter(f => f.comprado).length }}/{{ feiraDia1.length }} comprados
      </span>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <label
        v-for="f in feiraDia1"
        :key="f.id"
        class="flex items-center gap-2 p-2.5 rounded-lg border text-xs cursor-pointer transition select-none"
        :class="f.comprado ? 'bg-zinc-100 border-zinc-200 text-zinc-400 line-through' : 'bg-white border-zinc-200 text-zinc-800 hover:border-zinc-400'"
      >
        <input type="checkbox" v-model="f.comprado" class="rounded border-zinc-300 text-zinc-900">
        <span>{{ f.nome }}</span>
      </label>
    </div>
  </section>
</template>

<script setup>
import { feiraDia1 } from '../../stores/appState';
</script>
