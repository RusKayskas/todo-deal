<template>
  <div class="text-center mb-2">
    <UiButton class="transition-all opacity-4 hover:opacity-100 hover:text-[#a252c8]" @click="isOpenForm = !isOpenForm">
      <Icon
        :icon="isOpenForm ?'radix-icons:arrow-up': 'radix-icons:plus-circled'" 
        class="fade-in-100 fade-out-0 cursor-pointer"  
        size="25" 
      />
    </UiButton>
    <Form v-if="isOpenForm" :validation-schema="schema" @submit="onSubmit" class="form">
      <div class="form__field">
      <Field v-model="name" v-bind="nameAttrs" class="form__input" name="name" />
      <ErrorMessage class="form__error" name="name" />
      </div>
      <Field v-model="details" v-bind="detailsAttrs" class="form__input" name="details" type="details" />
      <ErrorMessage class="form__error" name="details" />

      <button class="form__button" :disabled="isPending">
        {{ isPending ? 'Загрузка' : 'Добавить' }}
      </button>
    </Form> 
  </div>
</template>

<script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import { useMutation } from '@tanstack/vue-query';
  import { v4 as uuid } from 'uuid';
  import { COLLECTION_TODO, DB_ID } from '@/app.constans';
  import type { ITask } from '@/types/todo.types';
  import UiButton from '@/components/ui/button/Button.vue';
  import { Icon } from '@iconify/vue';
  import { Field, Form, ErrorMessage, useForm } from 'vee-validate';
  import * as yup from 'yup';
  import { DB } from '@/utils/appwrite';

  const isOpenForm = ref<boolean>(false);
 
  interface ITaskFormState extends Pick<ITask, 'name' | 'details'> {
    status: string
  }

  const props = defineProps({
    status: {
      type: String,
      default: ''
    },
    refetch: {
      type: Function,
    }
  })

const schema = yup.object({
  name: yup.string().required(),
});

const { handleSubmit, defineField, handleReset } = useForm<ITaskFormState>({
  initialValues: {
    status: props.status
  }
})

const [name, nameAttrs] = defineField('name');
const [details, detailsAttrs] = defineField('details');

const {mutate, isPending} = useMutation({
  mutationKey: ['create a new task'],
  mutationFn: (data: ITaskFormState) => DB.createDocument(DB_ID, COLLECTION_TODO, uuid(), data),
  onSuccess() {
    props.refetch && props.refetch()
    handleReset()
  }
})

const onSubmit = handleSubmit(values => {
  mutate(values)
  isOpenForm.value = false;
})

</script>

<style lang="scss">
  .form {
    @apply mb-3 block mt-3;
    animation: show 0.3s ease-in-out;
    &__input {
      width: 100%;
      @apply border-[#161c26] mb-2 text-zinc-900 placeholder:text-[#384a65] focus:border-border transition-colors;
    }
  }
  @keyframes show {
   from {
    @apply border-[#a252c83d];
    transform: translateY(-35px);
    opacity: 0.5;
   }
   90% {
    @apply border-[#a252c83d]
   }
   to {
    @apply border-transparent;
    transform: translateY(0);
    opacity: 1;
   }
  }
</style>