import { CSSProperties, useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    // TODO: maxCount
    const { counter, handleMinus, handleAdd, maxCounter } =
        useContext(ProductContext);

    const isMaxReached = useCallback(
        (): boolean => !!maxCounter && counter === maxCounter,
        [counter, maxCounter],
    );

    const isZero = useCallback((): boolean => counter === 0, [counter]);

    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={handleMinus} className={`${styles.buttonMinus} ${isZero() && styles.disabled} `}>
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                onClick={handleAdd}
                disabled={isMaxReached()}
                className={` ${styles.buttonAdd}  ${
                    isMaxReached() && styles.disabled
                } `}>
                +
            </button>
        </div>
    );
};
