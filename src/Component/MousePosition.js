import React, { useState ,useEffect} from 'react'

const MousePosition = () => {
    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const LogMouseMove = (event) => {
        setX (event.clientX)
        setY (event.clientY)
    }

    useEffect(() => {
        console.log("Mouse Position tracking")
        window.addEventListener("mousemove",LogMouseMove)
    })
    return(
        <div>
<p>Mouse X axis is{x}  and Y axis is {y} </p>
        </div>
    )
}

export default MousePosition