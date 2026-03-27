import { HydratedDocument, Types } from 'mongoose';
export type OriginatorDocument = HydratedDocument<Originator>;
export declare class Originator {
    private longName;
    private shortName;
    private category;
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
}, {}, Originator>;
