export default (state, action) => {
  switch (action.type) {
    case "ADD_TX":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "REMOVE_TX":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
