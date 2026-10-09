<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
    <div class="p-4 bg-white border border-zinc-200 rounded-xl shadow-xs">
      <div class="flex items-center justify-between">
        <span class="text-xs font-medium uppercase tracking-wider text-zinc-500">Progresso Geral</span>
        <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">{{ progressoPercentual }}%</span>
      </div>
      <p class="text-2xl font-bold text-zinc-900 mt-2">{{ itensAdquiridos }} <span class="text-sm font-normal text-zinc-400">/ {{ totalItens }} itens</span></p>
      <div class="w-full bg-zinc-100 h-1.5 rounded-full mt-3 overflow-hidden">
        <div class="bg-zinc-900 h-1.5 transition-all duration-300" :style="{ width: progressoPercentual + '%' }"></div>
      </div>
    </div>

    <div class="p-4 bg-white border border-zinc-200 rounded-xl shadow-xs">
      <span class="text-xs font-medium uppercase tracking-wider text-zinc-500">Fase 1 (Dia Zero)</span>
      <p class="text-2xl font-bold text-zinc-900 mt-2">{{ pendentesFase1 }} <span class="text-sm font-normal text-zinc-400">pendentes</span></p>
      <p class="text-xs text-rose-600 mt-2 font-medium">Prioridade para habitar as camas</p>
    </div>

    <div class="p-4 bg-white border border-zinc-200 rounded-xl shadow-xs">
      <span class="text-xs font-medium uppercase tracking-wider text-zinc-500">Total Desembolsado</span>
      <p class="text-2xl font-bold text-zinc-900 mt-2">{{ formatarMoeda(totalGasto) }}</p>
      <p class="text-xs text-zinc-500 mt-2">Gasto real comprovado</p>
    </div>

    <div class="p-4 bg-white border border-zinc-200 rounded-xl shadow-xs">
      <span class="text-xs font-medium uppercase tracking-wider text-zinc-500">Estimativa Pendente</span>
      <p class="text-2xl font-bold text-zinc-900 mt-2">{{ formatarMoeda(totalEstimadoRestante) }}</p>
      <p class="text-xs text-zinc-500 mt-2">Total planejado a adquirir</p>
    </div>
  </section>
</template>

<script setup>
import { progressoPercentual, itensAdquiridos, totalItens, pendentesFase1, totalGasto, totalEstimadoRestante } from '../../stores/appState';
import { formatarMoeda } from '../../utils/formatadores';
</script>
