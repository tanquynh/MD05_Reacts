import { DECREMENT, INCREMENT } from "../action/countAction";

const initialSate = 0;
const countReducer = (state = initialSate, action)=> {
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
export default countReducer;