import React, { ReactElement, createContext, useState } from 'react';

export interface ICart {
    [name: string]: number | null
}

const StoreContext = createContext<any>({todos: [], dispatch: () => {}});

const AddToCart = (item: string, cart: any) => {
    if(item in cart[0]) {
        cart[1]({ ...cart[0], [item]: cart[0][item] + 1 });
    } else if (Object.keys(cart[0]).length === 0) {
        cart[1]({ [item]: 1 });
    } else {
        cart[1]({ ...cart[0], [item]: 1 });
    }
}

const GlobalStore = ({ children }: { children: ReactElement }) => {
    const [cart, setCart] = useState<ICart>({});
    const [showComponents, setShowComponents] = useState<boolean>(true);

    const store = {
        showComponents: [showComponents, setShowComponents],
        cart: [cart, setCart]
    }

    return <StoreContext.Provider value={ store }>{ children }</StoreContext.Provider>
}

export {
    StoreContext,
    AddToCart,
    GlobalStore,
}