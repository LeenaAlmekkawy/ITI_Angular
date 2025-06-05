import { Product } from "./product.model";
export interface ProductApiResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
