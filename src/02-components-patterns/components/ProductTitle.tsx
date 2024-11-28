import { CSSProperties, useContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
    className?: string;
    title?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext);

    return (
        <span
            style={style}
            className={`${styles.productDescription} ${className}`}>
            {title ? title : product.title}
        </span>
    );
};
