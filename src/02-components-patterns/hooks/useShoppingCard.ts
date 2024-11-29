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

            if (count === 0) {
                const { [product.id]: toDetele, ...rest } = oldShopping;

                return {
                    ...rest,
                };
            }

            return {
                ...oldShopping,
                [product.id]: {
                    ...product,
                    count,
                },
            };
        });
    };

  
    return {
        //! Propiedades
        shoppingCard,
        //! Metodos
        onProductCountChange,
      }
}
