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
}
