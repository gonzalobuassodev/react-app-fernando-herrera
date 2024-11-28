import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, handleMinus, handleAdd } = useContext(ProductContext);

    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={handleMinus} className={styles.buttonMinus}>
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={handleAdd} className={styles.buttonAdd}>
                +
            </button>
        </div>
    );
};
