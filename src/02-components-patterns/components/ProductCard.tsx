
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductContextProps, ProductProps } from '../interfaces';
// import { ProductButtons, ProductImage, ProductTitle } from '.';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductProps) => {
    const { counter, handleMinus, handleAdd } = useProduct();

    return (
        <Provider
            value={{
                counter,
                handleMinus,
                handleAdd,
                product,
            }}>
            <div className={styles.productCard}>{children}</div>
        </Provider>
    );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
