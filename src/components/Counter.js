import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../stores/CounterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch()
    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={()=>dispatch(increment())}> (+) </button>
                <button onClick={()=>dispatch(decrement())}> (-) </button>
            </div>
            
            
        </div>
    )
}

export default Counter
