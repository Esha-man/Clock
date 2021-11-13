import React, { useState, useEffect } from "react"

export const UseEffectComponent = () => {


  // useEffect(() => {
  //   setInterval(() => {
  //   console.log("INTERVAL " + counter)
  //   setCounter(state => state + 1)
  //   document.title = String(counter)
  //   }, 1000)
  // }, [])




    return (
      <div>
        <div>Counter</div>

       
        {/* Counter: {counter} - Fake: {fake} */}
        {/* <button onClick={() => setCounter(counter + 1)}>counter</button> */}
        {/* <button onClick={() => setFake(fake + 1)}>fake</button> */}

      </div>
    )
  }