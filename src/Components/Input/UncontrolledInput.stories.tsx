// import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {ChangeEvent, MouseEventHandler, useRef, useState} from "react";


export default {
    title: 'Training/Input',
    // component: UncontrIndicator,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};

export const UncontrolledInput = () => <input/>

export const TrackedValueInput = () => {
    const [value, setValue] = useState("")
    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        let newVal = event.currentTarget.value
        setValue(newVal)
    }
    return <>
        <input onChange={changeValue}></input> <span> - input value: {value}</span>
    </>
}

export const ButtonTrackedValueInput = () => {
    const [value, setValue] = useState("")
    const buttonRef = useRef<HTMLInputElement>(null)

    const clickRef = () => {
        let elem = buttonRef.current as HTMLInputElement
        setValue(elem.value)
    }

    return (
        <>
            <input ref={buttonRef}></input>
            <button onClick={clickRef}>save</button>
            <span> - input value: {value}</span>
        </>
    )
}

export const ControlledInput = () => {
    let [text, setText] = useState("")
    debugger
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setText(e.currentTarget.value)
    }
    return (
        <>
            <input value={text} onChange={changeValue}></input>
        </>
    )
}


export const ControlledCheckBox = () => {
    let [boolean, setBoolean] = useState(true)
    debugger
    const changeBoolean = (e: ChangeEvent<HTMLInputElement>) => {
        debugger

        setBoolean(e.currentTarget.checked)

    }
    return (
        <>
            <input type="checkbox" checked={boolean}  onChange={changeBoolean}></input>
        </>
    )
}

export const ControlledSelect = () => {
    let [val, setVal] = useState<string | undefined>("2")
    debugger
    const changeValue = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        setVal(e.currentTarget.value)
    }
    return (
        <>
            <select value={val} onChange={changeValue}>
                <option>none</option>
                <option value={"1"}>Minsk</option>
                <option value={"2"}>Moskva</option>
                <option value={"3"}>Kiev</option>
            </select>
        </>
    )
}