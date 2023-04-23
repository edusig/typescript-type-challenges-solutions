// Implementation
type MyOmit<T, ExcludeKeys extends keyof T> = {
  [K in Exclude<keyof T, ExcludeKeys>]: T[K];
};

// Example
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
