<script setup lang="ts">
  import { ref } from 'vue';
  import dayjs from 'dayjs';
  import type { ICard, IColumn } from '@/components/kanban/kanban.types';
  import { useKanbanQuery } from '@/components/kanban/useKanbanQuery';
  import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import CardTitle from '@/components/ui/card/CardTitle.vue';
  const dragCard = ref<ICard | null>(null);
  const sourceColumn = ref<IColumn | null>(null);
  const { data, isLoading, refetch } = useKanbanQuery();
  
</script>
<template>
  <section class="p-10">
    <h1>Tasks</h1>
    <div v-if="isLoading">isLoading...</div>
    <div class="grid grid-cols-5 gap-5" v-else>
      <!--Status-->
      <div
        v-for="column in data" 
        :key="column.id"
        >
        <div class="status rounded bg-slate-700 py-1 mb-2 text-center">
          {{ column.name }}
        </div>
        <Card v-for="card in column.items" :key="card.id" class="mb-3" draggable>
          <CardHeader role="button">
            <CardTitle class="text-sm">{{ card.name }}</CardTitle>
          </CardHeader>
          <CardDescription class="text-xs">
            Описание
          </CardDescription>
          <CardContent class="text-sm">
            {{ card.details }}
          </CardContent>
          <CardFooter>{{ dayjs(card.$createdAt).format('DD.MM.YYYY') }}</CardFooter>
        </Card>

      </div>
      
    </div>
  </section>
</template>

<style scoped>

</style>