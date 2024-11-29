import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

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
    maxCounter: number;
}

export interface ProductCardHookProps {

    ({ children, product, className }: ProductCardProps): JSX.Element,
    Title: ({ title, className }: ProductTitleProps) => JSX.Element;
    Image: ({ img, className }: ProductImageProps) => JSX.Element;
    Buttons: ({ className }: { className?: string }) => JSX.Element;
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}

export interface InitialValues {
    count: number;
    maxCount: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    handleMinus: () => void;
    handleAdd: () => void;
    reset: () => void;
}