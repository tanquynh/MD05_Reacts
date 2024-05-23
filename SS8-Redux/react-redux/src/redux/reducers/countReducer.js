import { DECREMENT, INCREMENT } from "../constants/countConstant";
const initState = 0;
const countReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log(action);
            state = state + action.payload;
            return state;
        case DECREMENT:
            console.log(action);
            state = state - action.payload;
            return state;
        default:
            return state;
    }
}
export default countReducer
