export enum CategoryType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export enum CategorySubtype {
  SALARY = 'salary',
  INVESTMENT = 'investment',
  GIFT = 'gift',
  REWARDS = 'rewards',
  OTHER_INCOME = 'other_income',

  HOUSING = 'housing',
  TRANSPORT = 'transport',
  FOOD = 'food',
  LEISURE = 'leisure',
  HEALTH = 'health',
  EDUCATION = 'education',
  PERSONAL_CARE = 'personal_care',
  OTHER_EXPENSE = 'other_expense',
}

export class Category {
  id: string;
  clientId: string;
  name: string;
  type: CategoryType;
  subtype: CategorySubtype;
  icon?: string;
  color?: string;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);

    this.type = this.type || CategoryType.EXPENSE;
    this.subtype = this.subtype || CategorySubtype.OTHER_EXPENSE;
  }
}
