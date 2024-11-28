
import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { Product, ProductContextProps } from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, handleMinus, handleAdd } = useProduct();

    return (
        <Provider
            value={{
                counter,
                handleMinus,
                handleAdd,
                product,
            }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    );
};