import { HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/categories/categories.schema';
export type OriginatorDocument = HydratedDocument<Originator>;
export declare class Originator {
    longName: string;
    shortName: string;
    category: Category;
}
export declare const OriginatorSchema: import("mongoose").Schema<Originator, import("mongoose").Model<Originator, any, any, any, (import("mongoose").Document<unknown, any, Originator, any, import("mongoose").DefaultSchemaOptions> & Originator & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Originator, any, import("mongoose").DefaultSchemaOptions> & Originator & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Originator>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Originator, import("mongoose").Document<unknown, {}, Originator, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Originator & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    longName?: import("mongoose").SchemaDefinitionProperty<string, Originator, import("mongoose").Document<unknown, {}, Originator, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Originator & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    shortName?: import("mongoose").SchemaDefinitionProperty<string, Originator, import("mongoose").Document<unknown, {}, Originator, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Originator & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<Category, Originator, import("mongoose").Document<unknown, {}, Originator, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Originator & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Originator>;
