import { ProductCard } from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import '../styles/custom-styles.css';
import { useShoppingCard } from '../hooks/useShoppingCard';
import { products } from '../data/products';




export const ShoppingPage = () => {

    const { shoppingCard, onProductCountChange } = useShoppingCard();
    

    return (
        <div style={{ padding: '20px' }}>
            <h1>Shopping Page</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        className='bg-dark text-white'
                        product={product}
                        value={shoppingCard[product.id]?.count || 0}
                        onChange={onProductCountChange}>
                        <ProductImage className='custom-rounded' />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))}
            </div>

            <div className='shopping-card'>
                {Object.entries(shoppingCard).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        className='bg-dark text-white'
                        product={product}
                        value={product.count}
                        onChange={onProductCountChange}>
                        <ProductImage className='custom-rounded' />
                        <ProductButtons
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            className='custom-buttons'
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
