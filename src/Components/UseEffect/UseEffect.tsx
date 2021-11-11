import React, { useState, useEffect } from "react"

export const UseEffectComponent = () => {

  // const [counter, setCounter] = useState(1)
  // const [fake, setFake] = useState(1)

  // console.log("useEffect")
  useEffect(() => {
    // setInterval(() => {
    // console.log("INTERVAL " + counter)
    // setCounter(state => state + 1)
    // document.title = String(counter)
    // }, 1000)
  }, [])

  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  useEffect(() => {

    setInterval(() => {
      // console.log(date.getMinutes())
      let date = new Date()
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
    }, 1000)

    //   setInterval(() => {
    //     let date = new Date()
    //     setMinutes(date.getMinutes());   
    //   }, 1000)
    //   setInterval(() => {
    //     let date = new Date()
    //     setSeconds(date.getSeconds());
    //   }, 1000)
    }, [])



    return (
      <div>
        <div>Clock</div>
        {hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}
        {/* Counter: {counter} - Fake: {fake} */}
        {/* <button onClick={() => setCounter(counter + 1)}>counter</button> */}
        {/* <button onClick={() => setFake(fake + 1)}>fake</button> */}

      </div>
    )
  }