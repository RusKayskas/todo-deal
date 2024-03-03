import type { EnumStatus } from '@/types/todo.types';

export interface ICard {
  id: string,
  name: string,
  details: string,
  $createdAt: string,
  status: string,
}

export interface IColumn {
  id: EnumStatus,
  name: string,
  items: ICard[],
}