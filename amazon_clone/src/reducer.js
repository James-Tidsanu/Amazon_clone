import { ConstructionRounded } from "@mui/icons-material";

export const initialState = {
  basket: [],
};

//Selecttor
export const getBasketTotal = (basket) => basket?.reduce

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket,action.item],
      };
    default:
      return state;
  }
};
export default reducer;
