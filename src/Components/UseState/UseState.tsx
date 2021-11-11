import React from "react";
import {useState} from "react";


const bigNum = () => {
    console.log("BigNum")
    return 6666666
}

export const UseState = () => {
    console.log("UseState")

    const [num, setNum] = useState(bigNum)

const changer = (state: number) => {
        debugger
  return state + 1
}
    return (
        <div>
            <button onClick={() => {
                setNum(changer)}}>+</button>
            {num}

        </div>
    )
}