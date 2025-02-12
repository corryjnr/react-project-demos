import { useState } from "react"
import "../counter-style.css"

const Counter = () => {
    const [count, setcount] = useState(0)

    const increment = () => setcount(count + 1)

    const decrement = () => setcount(count - 1)
    return (
        <div className="container">
            <div>
                <h1 className="number">{count}</h1>
            </div>
            <div className="bts-container">
                <button onClick={decrement} className="increment">-</button>
                <button onClick={increment} className="increment">+</button>
            </div>
        </div>
    )
}

export default Counter