export interface IBaseField {
  $createAt: string,
  $id: string,
}

export interface IComment extends IBaseField {
  text: string,
}

export enum EnumStatus {
  'todo' = 'todo',
  'in-progress' = 'in-progress',
  'waiting' = 'waiting',
  'testing' = 'testing',
  'done' = 'done', 
}

export interface ITask extends IBaseField {
  comments: IComment[],
  name: string,
  detail: string,
  status: EnumStatus
}