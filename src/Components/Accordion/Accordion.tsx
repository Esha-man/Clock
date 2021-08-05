// import React from "react";

type AccordionPropsType = {
    titleValue: string
    /**
     * Tf true - Menu are collapsed
     */
    collapsed: boolean
    /**
     * Callback change "collapsed" to true or false
     */
    set: () => void
    /**
     * Change title color-text
     */
    color?: string
}

function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle title={props.titleValue} color={props.color}
                                setFunc={props.set}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
}

export default Accordion;

type AccordionTitlePropsType = {
    title: string
    setFunc: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
const changeColor = props.color ? props.color : "black"
    return (
        <div>
            <h3 style={{color: changeColor}} onClick={(event)=> props.setFunc()}>---controlled {props.title}---</h3>
        </div>
    );
}


function AccordionBody(props: any) {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}