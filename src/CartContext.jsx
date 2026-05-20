import { createContext, useState } from "react";
import { merchArray, getMerchData } from "./merch";

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

  const removeOneFromCart = (id) => {
    const quantity = getItemQuantity(id);

    if (quantity == 1) {
      deleteAllOfOneItemFromCart(id);
    } else {
      // same logic as addOneToCart, but -
      setCartItems(
        cartItems.map(
          (item) =>
            item.id === id // if condition
              ? { ...item, quantity: item.quantity - 1 } // if condition is true, do this(ternary statement)
              : item, //else if first condition is false
        ),
      );
    }
  };

  // passing in id of item you want to delete
  const deleteAllOfOneItemFromCart = (id) => {
    // need to set the state here so that the function has access to and knows what's in the cart aka current state
    // all objects in the cart are defined as cartItems - which is a new array
    setCartItems((cartItems) =>
      // then call filter method on that array to loop through each object(defined as currentItem) in cartItems array
      cartItems.filter((currentItem) => {
        // checking condition that each iteration's(currentItem)'s id is not equal to the id passed in(which is what we want to delete)
        // if condition met, adding object to new array that's still called cartItems, which triggers state to reset - effectively updating the same cartItems and rerendering
        // .filter() automatically loops, builds "new" array, and checks condition provided - all that's needed is the actual condition to check
        return currentItem.id != id;
      }),
    );
  };
  // no explicit delete functionality, we are just rerendering the cart state sans whatever id matches, which acts the same as deleting
  // the id property will be getting passed back here by the onClick function call that will pass the item.id as an argument

  const getTotalCostOfCart = () => {
    let totalCost = 0;
    cartItems.map((cartItem) => {
      const merchItemData = getMerchData(cartItem.id);
      totalCost += merchItemData.price * cartItem.quantity;
    });
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
