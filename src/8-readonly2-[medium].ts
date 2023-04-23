// Implementation
type MyReadonly2<T, ReadonlyKeys extends keyof T> = {
  readonly [K in ReadonlyKeys]: T[K];
} & {
  [K in Exclude<keyof T, ReadonlyKeys>]: T[K];
};

// Example
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
