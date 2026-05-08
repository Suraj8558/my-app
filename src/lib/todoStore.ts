export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

type CreateTodoInput = {
  title: string;
};

type UpdateTodoInput = {
  title?: string;
  completed?: boolean;
};

const todos: Todo[] = [];

const nowIso = () => new Date().toISOString();

export function listTodos(): Todo[] {
  return todos;
}

export function getTodoById(id: string): Todo | undefined {
  return todos.find((todo) => todo.id === id);
}

export function createTodo(input: CreateTodoInput): Todo {
  const timestamp = nowIso();
  const todo: Todo = {
    id: crypto.randomUUID(),
    title: input.title,
    completed: false,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  todos.push(todo);
  return todo;
}

export function updateTodo(id: string, updates: UpdateTodoInput): Todo | undefined {
  const todo = getTodoById(id);
  if (!todo) {
    return undefined;
  }

  if (typeof updates.title !== "undefined") {
    todo.title = updates.title;
  }

  if (typeof updates.completed !== "undefined") {
    todo.completed = updates.completed;
  }

  todo.updatedAt = nowIso();
  return todo;
}

export function removeTodo(id: string): boolean {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return false;
  }

  todos.splice(index, 1);
  return true;
}
