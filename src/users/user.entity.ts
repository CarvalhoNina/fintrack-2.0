export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
