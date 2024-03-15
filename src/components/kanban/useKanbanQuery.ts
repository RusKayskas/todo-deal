import { COLLECTION_TODO, DB_ID } from "@/app.constans";
import { DB } from "@/utils/appwrite";
import { useQuery } from "@tanstack/vue-query";
import { IColumn } from "./kanban.types";
import { KANBAN_DATA } from "./kanban.data";
import { ITask } from "@/types/todo.types";

export function useKanbanQuery() {

  return useQuery({
    queryKey: ['todo'],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_TODO),
    select(data) {
      const newBoard: IColumn[] = KANBAN_DATA.map(column => ({
        ...column,
        items: [],
      }))

      const tasks = data.documents as unknown as ITask[];

      for (const task of tasks) {
        const column = newBoard.find(col => col.id === task.status)
        if (column) {
          column.items.push({
            $createdAt: task.$createAt,
            id: task.$id,
            name: task.name,
            details: task.details,
            status: column.name
          })
        }
      }
      console.log(tasks, newBoard);
      return newBoard;
    },
  })
}