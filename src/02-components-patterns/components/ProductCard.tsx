
import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: OnChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, handleMinus, handleAdd } = useProduct( { onChange, product, value } );

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