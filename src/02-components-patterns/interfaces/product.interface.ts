import { ReactElement } from "react";

export interface ProductProps {
    children?: ReactElement | ReactElement[];
    product: Product;
}

export interface Product {
    id: string;
    title?: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    handleMinus: () => void;
    handleAdd: () => void;
    product: Product;
}

export interface ProductCardHookProps {

    ({ children, product }: ProductProps): JSX.Element,
    Title: ({ title }: {
        title?: string;
    }) => JSX.Element;
    Image: ({ img }: {
        img?: string;
    }) => JSX.Element;
    Buttons: () => JSX.Element;

}