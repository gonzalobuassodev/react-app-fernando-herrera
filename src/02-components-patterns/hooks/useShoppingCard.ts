import { useState } from "react";
import { Product } from "../interfaces";

interface ShoppingCard extends Product {
    count: number;
}

export const useShoppingCard = () => {
  
  
    const [shoppingCard, setShoppingCard] = useState<{
        [key: string]: ShoppingCard;
    }>({});

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCard(oldShopping => {

            const productInCart: ShoppingCard = oldShopping[product.id] || {
                ...product,
                count: 0,
            }

            if (count > 0) {
                productInCart.count = count;
                return {
                    ...oldShopping,
                    [product.id]: productInCart,
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShopping;
            return rest;


            // if (count === 0) {
            //     const { [product.id]: toDetele, ...rest } = oldShopping;

            //     return {
            //         ...rest,
            //     };
            // }

            // return {
            //     ...oldShopping,
            //     [product.id]: {
            //         ...product,
            //         count,
            //     },
            // };
        });
    };

  
    return {
        //! Propiedades
        shoppingCard,
        //! Metodos
        onProductCountChange,
      }
}
