import React, {useState} from 'react'


const FetchingUsingAxiosUseState = () =>{

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] =('')


    return (
        <div>
            <h1 className='container'>
                This is useState using Axios
            </h1>
        </div>
    )
}

export default FetchingUsingAxiosUseState;