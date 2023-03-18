export interface Item {
    id: string;
    name: string;
    originalPrice: number;
    reducedPrice: number;
    description: string;
    vendorId: string;
    image: string; // base64 encoded image
}

export interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    roles: string[];
}