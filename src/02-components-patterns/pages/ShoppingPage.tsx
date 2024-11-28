import { ProductCard } from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: 'coffee-mug.png',
};

export const ShoppingPage = () => {
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
                <ProductCard className='bg-dark text-white' product={product}>
                    <ProductCard.Image className='custom-rounded' />
                    <ProductCard.Title
                        title=''
                        className='text-white text-bold'
                    />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard className='bg-dark text-white' product={product}>
                    <ProductImage className='custom-rounded' />
                    <ProductTitle className='text-white text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70d1f8',
                    }}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
};
