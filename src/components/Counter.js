import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from '../stores/CounterState'

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch()
    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={()=>dispatch(increment())}> (+) </button>
                <button onClick={()=>dispatch(decrement())}> (-) </button>
                <button onClick={()=>dispatch(incrementByAmount(10))}> (+10) </button>
            </div>
            
            
        </div>
    )
}

export default Counter
