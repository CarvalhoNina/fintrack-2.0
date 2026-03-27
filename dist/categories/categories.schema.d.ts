import { HydratedDocument } from 'mongoose';
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
export type CategoryDocument = HydratedDocument<Category>;
export declare class Category {
    type: CategoryType;
    subtype: CategorySubtype;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, (import("mongoose").Document<unknown, any, Category, any, import("mongoose").DefaultSchemaOptions> & Category & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Category, any, import("mongoose").DefaultSchemaOptions> & Category & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Category>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, import("mongoose").Document<unknown, {}, Category, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    type?: import("mongoose").SchemaDefinitionProperty<CategoryType, Category, import("mongoose").Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subtype?: import("mongoose").SchemaDefinitionProperty<CategorySubtype, Category, import("mongoose").Document<unknown, {}, Category, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Category>;
