export interface Product {
    id : number,
    name : string,
    status : string,
    action : 'delete' | 'edit';
}
export interface GetProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type ProductForm = Omit<Product,'id'>


export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginResponse {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    token: string;
}