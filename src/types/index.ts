export interface Field {
    name: string;
    label: string;
    required?: boolean; // add optional required prop
}

export interface ScannedItem {
    name?: string;
    description?: string;
    quantity?: number;
    originalPrice?: number;
    reducedPrice?: number;
    image?: string;
    key?: number;
}