<template>
  <button class="delete-task-button" @click="deleteDocBd(id)">
    <Icon :icon="isPending ? 'eos-icons:loading' : 'radix-icons:trash'" class="fade-in-100 fade-out-0 hover:bg-primary/90"  size="35" />
  </button>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { Icon } from '@iconify/vue';
  import { useMutation } from '@tanstack/vue-query';
  import { DB } from '@/utils/appwrite';
  import { COLLECTION_TODO, DB_ID } from '@/app.constans';
  import { useKanbanQuery } from '@/components/kanban/useKanbanQuery';
  defineProps({
    id: {
      type: String,
      default: ''
    },
  })
  const { refetch } = useKanbanQuery();
  type TypeDelete = {
    docId: string,
  }
  const { mutate, isPending } = useMutation({
      mutationKey: ['delete card'],
      mutationFn: ({ docId }: TypeDelete) => 
      DB.deleteDocument(DB_ID, COLLECTION_TODO, docId),
      onSuccess: () => {
        refetch();
      }
    })
  const deleteDocBd = (id: string) => {
    mutate({docId: id})
  }
</script>

<style>
</style>