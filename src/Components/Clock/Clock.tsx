import React, { useState, useEffect } from "react"
import styleCss from "./Clock.module.css"


export const Clock = () => {

  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let int = setInterval(() => {
      let date = new Date()
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
    }, 1000)
    return () => {
      clearInterval(int)
    }
  }, [])
  const getTwiceNum = (value: number) => value < 10 ? "0" + value : value



  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`
  }
  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`
  }
  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`
  }

  return (
    <div className={styleCss
      .clockContainer}>
      <div className={styleCss
        .digital__wrapper}>
        <h2>Digital clocks</h2>
        <div className={styleCss
          .digital__body}>
          <span>{getTwiceNum(hours)}</span>
          :
          <span>{getTwiceNum(minutes)}</span>
          :
          <span>{getTwiceNum(seconds)}</span>
        </div>
      </div>

      <div className={styleCss
        .analog__wrapper}>
        <h2>Analog clock</h2>
        <div className={styleCss
          .analog__body}>
          <div className={styleCss.hour} style={hoursStyle}> </div>
          <div className={styleCss.minute} style={minutesStyle}> </div>
          <div className={styleCss.second} style={secondsStyle}> </div>


          <div className={styleCss.numbersBlock}>
            <div>12</div>
            <div className={styleCss.numbersHorizon}>
              <div>9</div>
              <div className={styleCss.centerRound}></div>
              <div>3</div>
            </div>
            <div>6</div>
          </div>

        </div>
      </div>

    </div>
  )
}