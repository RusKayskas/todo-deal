<template>
  <section class="p-10">
    <h1>Tasks</h1>
    <div v-if="isLoading">isLoading...</div>
    <div class="grid grid-cols-5 gap-5" v-else>
      <!--Status-->
      <div
        v-for="column in data" 
        :key="column.id"
        @dragover="handleDragOver"
        @drop="() => handleDrop(column)"
        >
        <div class="status rounded bg-slate-700 py-1 mb-2 text-center">
          {{ column.name }}
        </div>

        <CreateTask :refetch="refetch"  :status="column.id"/>

        <Card 
          v-for="card in column.items" 
          :key="card.id" class="mb-3" 
          draggable="true"
          @dragstart="() => handleDrugStart(card, column)"
        >
          <CardHeader role="button">
            <CardTitle class="text-sm">{{ card.name }}</CardTitle>
          </CardHeader>
          <CardDescription class="text-xs">
            Описание
          </CardDescription>
          <CardContent class="text-sm">
            {{ card.details }}
          </CardContent>
          <CardFooter>
            <span class="text-xs">{{ dayjs(card.$createdAt).format('DD.MM.YYYY') }}</span>
            <DeleteTaskButton :id="card.id" />
          </CardFooter>
        </Card>

      </div>
      
    </div>
  </section>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import dayjs from 'dayjs';
  import type { ICard, IColumn } from '@/components/kanban/kanban.types';
  import { useKanbanQuery } from '@/components/kanban/useKanbanQuery';
  import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
  import CreateTask from '@/components/kanban/CreateTask.vue';
  import { useMutation } from '@tanstack/vue-query';
  import { EnumStatus } from '@/types/todo.types';
  import { DB } from '@/utils/appwrite';
  import { COLLECTION_TODO, DB_ID } from '@/app.constans';
  import DeleteTaskButton from '@/components/kanban/DeleteTaskButton.vue';
  const dragCard = ref<ICard | null>(null);
  const sourceColumn = ref<IColumn | null>(null);

  //drag and drop 
  type TypeMutationVariables = {
    docId: string,
    status?: EnumStatus 
  }
  const { mutate } = useMutation({
    mutationKey: ['move card'],
    mutationFn: ({ docId, status }: TypeMutationVariables) => 
    DB.updateDocument(DB_ID, COLLECTION_TODO, docId, {
      status,
    }),
    onSuccess: () => {
      refetch()
    }
  })
  const { data, isLoading, refetch } = useKanbanQuery();
  const handleDrugStart = (card: ICard, column: IColumn) => {
    dragCard.value = card;
    sourceColumn.value = column
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  }

  const handleDrop = (targetColumn: IColumn) => {
    if (dragCard.value && sourceColumn.value) {
      mutate({ docId: dragCard.value.id, status: targetColumn.id })
    }
  }
  

</script>

<style scoped>

</style>