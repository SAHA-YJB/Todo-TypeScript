import { atom } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [],
});