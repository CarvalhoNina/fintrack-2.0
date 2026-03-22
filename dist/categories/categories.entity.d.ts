export declare enum CategoryType {
    INCOME = "income",
    EXPENSE = "expense"
}
export declare enum CategorySubtype {
    SALARY = "salary",
    INVESTMENT = "investment",
    GIFT = "gift",
    REWARDS = "rewards",
    OTHER_INCOME = "other_income",
    HOUSING = "housing",
    TRANSPORT = "transport",
    FOOD = "food",
    LEISURE = "leisure",
    HEALTH = "health",
    EDUCATION = "education",
    PERSONAL_CARE = "personal_care",
    OTHER_EXPENSE = "other_expense"
}
export declare class Category {
    id: string;
    type: CategoryType;
    subtype: CategorySubtype;
    constructor(partial: Partial<Category>);
}
