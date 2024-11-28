import { useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
    const { counter, handleMinus, handleAdd } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
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
