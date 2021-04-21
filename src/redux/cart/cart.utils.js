export const handleAddItemToCart = (cartItems, itemToAdd) => {
    const itemWithNameFoundInCart = () => {
        return cartItems.find(item => item.id === itemToAdd.id);
    };

    if (itemWithNameFoundInCart()) {
        const newCartItems = cartItems.reduce((a, item) => {
            if (item.id === itemToAdd.id) {
                item.quantity++;
            }

            a.push(item);

            return a;
        }, []);

        return [...newCartItems];
    } else {
        return [...cartItems, { ...itemToAdd, quantity: 1 }];
    }
};

export const handleReduceItemFromCart = (cartItems, itemToRemove) => {
    let item = cartItems.find(item => item.id === itemToRemove.id);

    if (item) {
        item.quantity--;

        // if quantity still in basket, then return cartItems with reduced quantity
        // else, return cartItems without item with 0 quantity
        if (!itemToRemove.quantity) {
            const newCartItems = cartItems.reduce((arr, item) => {
                if (item.id !== itemToRemove.id) {
                    arr.push(item);
                }

                return arr;
            }, []);

            return newCartItems || [];
        } else {
            return [...cartItems];
        }
    }
};

export const handleRemoveItemFromCart = (cartItems, cartItemCount, itemToRemove) => {
    const newCartItems = cartItems.filter(item => item.id !== itemToRemove.id);

    const returnObj = {
        cartItems: newCartItems,
        cartItemCount: cartItemCount - itemToRemove.quantity
    };

    return returnObj;
};
