export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type User = {
  id: string;
  role: Role;
};
