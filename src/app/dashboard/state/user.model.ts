import { ID, guid } from '@datorama/akita';

export interface User {
  id: ID;
  name: string;
  active: boolean;
}

export function createUser(params: Partial<User>) {
  return {
    id: guid(),
    name: params.name,
    active: params.active,
  } as User;
}
