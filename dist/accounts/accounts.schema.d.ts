import { HydratedDocument } from 'mongoose';
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
export type AccountDocument = HydratedDocument<Account>;
export declare class Account {
    clientId: string;
    bankName: string;
    type: AccountType;
    balance: number;
    currency: Currency;
}
export declare const AccountSchema: import("mongoose").Schema<Account, import("mongoose").Model<Account, any, any, any, (import("mongoose").Document<unknown, any, Account, any, import("mongoose").DefaultSchemaOptions> & Account & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Account, any, import("mongoose").DefaultSchemaOptions> & Account & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Account>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Account, import("mongoose").Document<unknown, {}, Account, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    clientId?: import("mongoose").SchemaDefinitionProperty<string, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bankName?: import("mongoose").SchemaDefinitionProperty<string, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<AccountType, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    balance?: import("mongoose").SchemaDefinitionProperty<number, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<Currency, Account, import("mongoose").Document<unknown, {}, Account, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Account & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Account>;
