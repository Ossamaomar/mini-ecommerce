export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export type SignupInputs = {

    username: string;
    email: string;
    password: string;
};

export type LoginInputs = {
    username: string;
    password: string;
};