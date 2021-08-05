
import React, {useState} from "react";

export type IndicatorType = {
    change: (onUnc: boolean) => void
    defaultOn?: boolean
}

export const UncontrIndicator = (props: IndicatorType) => {

    let [onUnc, setOnUnc] = useState(props.defaultOn ? props.defaultOn : false); //hook


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "black 1px solid",
        padding: "2px",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: onUnc ? "green" : "white",
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "black 1px solid",
        padding: "2px",
        display: "inline-block",
        backgroundColor: onUnc ? "white" : "red",
    }

    const lightStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        padding: "5px",
        border: "black 2px solid",
        display: "inline-block",
        margin: "20px 0px 0px 10px",
        backgroundColor: onUnc ? "yellow" : "grey",
    }

    let trueClick = () => {
        setOnUnc(true)
        props.change(true)
    }

    let falseClick = () => {
        setOnUnc(false)
        props.change(false)
    }
    return (
        <div>
            <div style={onStyle}
                 onClick={trueClick}>
                ON
            </div>
            <div style={offStyle}
                 onClick={falseClick}>
                OFF
            </div>
            <div style={lightStyle}></div>
        </div>
    )
}