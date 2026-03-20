export class Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;

  constructor(partial: Partial<Client>) {
    Object.assign(this, partial);
  }
}
