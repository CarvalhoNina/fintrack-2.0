declare class AddressDto {
    street?: string;
    city?: string;
    province?: string;
    postalCode?: string;
}
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    address?: AddressDto;
    password: string;
}
export {};
