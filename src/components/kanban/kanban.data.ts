import { EnumStatus } from "@/types/todo.types";
import type { IColumn } from "./kanban.types";

export const KANBAN_DATA: IColumn[] = [
  {
    id: EnumStatus.todo,
    name: 'Todo',
    items: [],
  },
  {
    id: EnumStatus['in-progress'],
    name: 'In-progress',
    items: [],
  },
  {
    id: EnumStatus['waiting'],
    name: 'Waiting',
    items: [],
  },
  {
    id: EnumStatus['testing'],
    name: 'Testing',
    items: [],
  },
  {
    id: EnumStatus['done'],
    name: 'Done',
    items: [],
  }
]