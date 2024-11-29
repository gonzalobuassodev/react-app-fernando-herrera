import { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import {
    InitialValues,
    OnChangeArgs,
    Product,
    ProductCardHandlers,
    ProductContextProps,
} from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children: (args: ProductCardHandlers) => JSX.Element;
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
    initialValues,
}: Props) => {
    const {
        counter,
        handleMinus,
        handleAdd,
        maxCounter,
        isMaxCountReached,
        reset,
    } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

    return (
        <Provider
            value={{
                counter,
                handleMinus,
                handleAdd,
                product,
                maxCounter,
            }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children({
                    product,
                    count: counter,
                    isMaxCountReached,
                    maxCount: maxCounter,
                    handleMinus,
                    handleAdd,
                    reset,
                })}
            </div>
        </Provider>
    );
};
