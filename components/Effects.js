import React, { useState } from "react"

function Effects() {

const [answer] = useState("Yes")

return (

<div><h1> Is state important to know? {answer} </h1></div>

)

}
export default Effects