export class Clients {
  id: string;
  name: string;
  email: string;
  address: string;
  password: string;

  constructor(partial: Partial<Clients>) {
    Object.assign(this, partial);
  }
}
