const initialState = 0;

export default function Counter(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "DEC":
      return state > 0 ? state - action.payload : 0;
    case "FIVE":
      return action.payload + 5;
    default:
      return state;
  }
}
