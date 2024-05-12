import React from 'react'

function Mapping() {
    const array = [10,20,30,40,50];
      const newarr =array.map((item,index) => {

        return (item/2)

      })


  return (
    <div>
      <p>{newarr}</p>

    </div>
  )
}

export default Mapping
