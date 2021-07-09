export const initialState = {
  basket: [],
  user: null,
};

// Selector

export const getBasketTotal = (basket) =>
  basket?.reduce((totalPrice, item) => totalPrice + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove product");
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "REMOVE_THIS_ITEM_FROM_BASKET":
      let basketAfterDeleteItem = [];
      state.basket.map((item) => {
        if (item.id !== action.id) {
          basketAfterDeleteItem.push(item);
        }
      });

      return {
        ...state,
        basket: basketAfterDeleteItem,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
