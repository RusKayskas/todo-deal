<script setup lang="ts">
import { defineProps } from 'vue';
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('text-xs pt-6 text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
