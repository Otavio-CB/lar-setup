<template>
  <div v-if="toast.visivel" class="fixed bottom-5 right-5 bg-zinc-900 text-white text-xs px-4 py-3 rounded-lg shadow-lg border border-zinc-700 flex items-center gap-2 z-50">
    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    {{ toast.mensagem }}
  </div>
</template>

<script setup>
import { toast } from '../../composables/useToast';
</script>
