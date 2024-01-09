const initialStore = [];

export default function todoReducer(store = initialStore, action) {
  switch (action.type) {
    case "ADD":
      return [...store, action.payload];
    case "DELETE":
      return store.filter((val) => val.id != action.payload);
    default:
      return store;
  }
}
