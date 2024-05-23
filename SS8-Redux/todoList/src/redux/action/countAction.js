export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";

export const handleIncrement = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

export const handleDecrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}
