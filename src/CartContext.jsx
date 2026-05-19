import { createContext, useState } from "react";
import { merchArray } from "./merch";

export const CartContext = createContext({
  items: [],
  // you don't define function logic here, you are simply stating CAN define it later(outiside Context). that's why empty arrow function
  //   think of them as empty placeholders initialized as empty
  getItemQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteAllOfOneItemFromCart: () => {},
  getTotalCostOfCart: () => {},
});

// think of it like
// Context (cart, addCart, removeFromCart, etc)
// Provider -> gives react app access to all things inside your Context - but only to what's inside Provider
// store Context inside () as object, hence {}

// destructuring children prop which represents whatever components are wrapped inside CartProvider when it's used
export function CartProvider({ children }) {
  // this state is now specific to the provider
  const [cartItems, setCartItems] = useState([]);

  const getItemQuantity = (id) => {
    // declaring each iteration object to be an item and saying we expect each item to have an id, then check to see if that id matches the id we are passing in as a property
    // ?.quantity is safeguarding in case there's no id matching, which would be undefined, and trying to get .quantity of undefined would throw an error
    // no longer asks for .quantity if id is undefined, but if id is defined, it checks for quantity
    const quantity = cartItems.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const addOneToCart = (id) => {
    // what does this line do?
    const quantity = getItemQuantity(id);

    if (quantity == 0) {
      //product not in card
      setCartItems([
        ...cartItems, //get me all properties for cartItems
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      //product is in cart
      setCartItems(
        cartItems.map(
          (item) =>
            item.id === id // if condition
              ? { ...item, quantity: item.quantity + 1 } // if condition is true, do this(ternary statement)
              : item, //else if first condition is false
        ),
      );
    }
  };

  const deleteAllOfOneItemFromCart = (id) => {
    setCartItems((cartItems) =>
      cartItems.filter((currentItem) => {
        return currentItem.id != id;
      }),
    );
  };

  const contextValue = {
    // since these are getItemQuantity=getItemQuantity, JS lets you write like this
    // items is initially set as an empty array, but now set to cartItems so we can use that state, hence why useState is set to empty array now
    // this is to allow us to manipulate what the Provider is "providing" to the rest of the application - aka children inside it
    items: cartItems,
    getItemQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteAllOfOneItemFromCart,
    getTotalCostOfCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
