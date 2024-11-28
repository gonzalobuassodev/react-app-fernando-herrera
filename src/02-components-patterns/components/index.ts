

import { ProductCard as ProductCardHook } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHookProps } from '../interfaces';

export const ProductCard: ProductCardHookProps = Object.assign(ProductCardHook, {

    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,

});

export default ProductCard; 