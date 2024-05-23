import { DECREMENT, INCREMENT } from "../constants/countConstant"

export const handleIncrement = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}
export const handleDecrement = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}