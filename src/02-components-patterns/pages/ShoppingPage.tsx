import { ProductCard } from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className='bg-dark text-white'
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}>
                {({ reset, handleAdd, handleMinus, isMaxCountReached }) => (
                    <>
                        <ProductImage className='custom-rounded' />
                        <ProductButtons className='custom-buttons' />
                        <button onClick={reset} className='custom-rounded'>
                            Reset
                        </button>

                        {!isMaxCountReached && (
                            <button onClick={handleAdd}>+2</button>
                        )}

                        <button onClick={handleMinus}>-2</button>
                        <button onClick={reset}>reset</button>
                    </>
                )}
            </ProductCard>
        </div>
    );
};
