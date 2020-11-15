import React, { useEffect, useState } from "react"
import randomcolor from "randomcolor"


function Effects() {

const [answer, setAswer] = useState("Yes")
const [count, setCount] = useState(0)
const [ color, setColor] = useState("")


function increment() {
    setCount(prevCount => prevCount +1 )
}

function decrement() {
    setCount(prevCount => prevCount -1 )
}



useEffect(() => {
setColor(randomcolor())
}, [count] )

return (
<>




<div><h1> Is state important to know? {answer} </h1></div>
<h1 style={{color:color}}>{count}</h1>
<button onClick={increment}>Increment!</button>
<button onClick={decrement}>decrement!</button>
</>
)
}
export default Effects