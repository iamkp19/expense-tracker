import { createContext, useReducer } from "react";
import TxReducer from "./TxReducer";

const initialState = {
  transactions: [],
};

export const TxContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TxReducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TX",
      payload: transaction,
    });
  }
  return (
    <TxContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
      }}
    >
      {children}
    </TxContext.Provider>
  );
};
