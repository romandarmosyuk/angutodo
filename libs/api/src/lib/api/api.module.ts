export type Todos = Todo[];

export type Todo = Readonly<{
  createdAt: number;
  text: string;
  completed: boolean;
  id: string;
}>;
