import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/users/user.schema';
export declare enum Currency {
    BRL = "BRL",
    CAD = "CAD",
    USD = "USD",
    EUR = "EUR"
}
export declare enum AccountType {
    CHECKING = "checking",
    SAVINGS = "savings",
    CREDIT = "credit"
}
export declare enum BankName {
    RBC = "RBC",
    TD = "TD",
    BMO = "BMO",
    SCOTIA = "Scotiabank",
    CIBC = "CIBC",
    SANTANDER = "Santander",
    NUBANK = "Nubank",
    OTHER = "Other"
}
export type AccountDocument = HydratedDocument<Account>;
export declare class Account {
    user: User;
    bankName: BankName;
    type: AccountType;
    balance: number;
    currency: Currency;
}
export declare const AccountSchema: import("mongoose").Schema<Account, import("mongoose").Model<Account, any, any, any, (import("mongoose").Document<unknown, any, Account, any, import("mongoose").DefaultSchemaOptions> & Account & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Account, any, import("mongoose").DefaultSchemaOptions> & Account & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Account>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Account, import("mongoose").Document<unknown, {}, Account, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    user?: import("mongoose").SchemaDefinitionProperty<User, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bankName?: import("mongoose").SchemaDefinitionProperty<BankName, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<AccountType, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    balance?: import("mongoose").SchemaDefinitionProperty<number, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<Currency, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Account>;
