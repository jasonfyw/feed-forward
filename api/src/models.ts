export interface Item {
    id: string;
    name: string;
    originalPrice: number;
    reducedPrice: number;
    description: string;
    image: string; // base64 encoded image
}