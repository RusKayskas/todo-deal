<script setup lang="ts">
  import { ref } from 'vue';
  import type { ICard, IColumn } from '@/components/kanban/kanban.types';
  import { useKanbanQuery } from '@/components/kanban/useKanbanQuery';
  const dragCard = ref<ICard | null>(null);
  const sourceColumn = ref<IColumn | null>(null);
  const { data, isLoading, refetch } = useKanbanQuery();
  
</script>
<template>
  <section>
    <h1>Tasks</h1>
    <div v-if="isLoading">isLoading...</div>
    <div v-else>
      <!--Status-->
      <div v-for="column in data" :key="column.id">
        <div class="status">
          {{ column.name }}
        </div>

        <div class="card" draggable="true">
          <p class="card__title">
            name
          </p>
          <p class="card__details">
            details
          </p>
          <p class="card__date">
            date
          </p>
        </div>

      </div>
      
    </div>
  </section>
</template>

<style scoped>

</style>