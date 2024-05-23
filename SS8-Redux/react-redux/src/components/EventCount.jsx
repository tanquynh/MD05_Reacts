import React from 'react'
import { useDispatch } from 'react-redux'
import { handleDecrement, handleIncrement } from '../redux/action/countAction';

function EventCount() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(handleIncrement(1))}>increment</button>
            <button onClick={() => dispatch(handleDecrement(1))}>decrement</button>
        </div>
    )
}

export default EventCount
