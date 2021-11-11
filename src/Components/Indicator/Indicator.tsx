import React, {useState} from "react";

export type IndicatorType = {
    on: boolean
    set: (on: boolean) => void
}



export const OldIndicator = (props: IndicatorType) => {

    console.log("Indicator")

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "black 1px solid",
        padding: "2px",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white",
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "black 1px solid",
        padding: "2px",
        display: "inline-block",
        backgroundColor: props.on ? "white" : "red",
    }

    const lightStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        padding: "5px",
        border: "black 2px solid",
        display: "inline-block",
        margin: "20px 0px 0px 10px",
        backgroundColor: props.on ? "yellow" : "grey",
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.set(true)}>ON
            </div>
            <div style={offStyle} onClick={() => props.set(false)}>OFF
            </div>
            <div style={lightStyle}></div>
        </div>
    )
}

export const Indicator = React.memo(OldIndicator)
