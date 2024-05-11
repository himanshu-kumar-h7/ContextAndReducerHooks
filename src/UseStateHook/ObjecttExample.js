import React, {useState} from "react";

const ObjecttExample = () => {
    const[name,setName] = useState({firstname : '' ,lastname : '' ,roll : {}})

   const handleFirstName = (event) => {
    setName({...name,firstname : event.target.value})
   }


     return (
        <div>
            <p>Enter you Name Here</p>
            <form>
                <input type="text" value={name.firstname} onChange={handleFirstName } > 
                </input>
                
            </form>
            <p>Enter you Surname Here</p>
            <form>
            <input type="text" value={name.lastname} onChange={(event) => setName({...name,lastname : event.target.value})} > 
                </input>
            </form>
            <p>Enter you Roll no Here</p>
            <input type="number" value={name.roll} onChange={(event) => setName({...name,roll : event.target.value})} > 
                </input>

        </div>
    )
}

export default ObjecttExample