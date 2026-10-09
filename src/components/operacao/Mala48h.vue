<template>
  <section class="bg-white border border-zinc-200 rounded-xl p-5 shadow-xs">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-3 mb-4">
      <div>
        <h2 class="text-sm font-semibold text-zinc-900">Mala das Primeiras 48 Horas (Levar junto no carro)</h2>
        <p class="text-xs text-zinc-500">O que vocês precisam ter em mãos no primeiro dia com as camas já no lugar.</p>
      </div>
      <span class="text-xs font-semibold px-2 py-1 rounded bg-zinc-100 text-zinc-700 self-start sm:self-auto">
        {{ tarefas48hConcluidas }} de {{ mala48h.length }} prontos
      </span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <div
        v-for="item in mala48h"
        :key="item.id"
        class="p-3 rounded-lg border flex items-start gap-2.5 transition"
        :class="item.pronto ? 'bg-emerald-50/40 border-emerald-200' : 'bg-zinc-50 border-zinc-200'"
      >
        <input type="checkbox" v-model="item.pronto" class="mt-0.5 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-800">
        <div class="text-xs">
          <p class="font-medium" :class="item.pronto ? 'line-through text-zinc-400' : 'text-zinc-800'">{{ item.titulo }}</p>
          <p class="text-[11px] text-zinc-500 mt-0.5">{{ item.motivo }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mala48h, tarefas48hConcluidas } from '../../stores/appState';
</script>
