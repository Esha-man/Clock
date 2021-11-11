// import React from "react";

type ItemsType = {
    title: string
    value: number
}

type AccordionPropsType = {
    titleValue: string

    collapsed: boolean
    set: () => void
    color?: string
    items: ItemsType[]
    clicked: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            setFunc={props.set}


            />
            {!props.collapsed && <AccordionBody items={props.items} clicked={props.clicked}/>}
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
            <h3 style={{color: changeColor}} onClick={() => props.setFunc()}>---controlled {props.title}---</h3>
        </div>
    );
}

type AccordionBodyProps = {
    items: ItemsType[]
    clicked: (value: any)=>void
}

function AccordionBody(props: AccordionBodyProps) {
    console.log("AccordionBody rendering");
    return (
        <ul>
            {props.items.map((item, index) => <li onClick={()=>{ props.clicked(item.value)}} key={index}>{item.title}</li>)}

        </ul>
    );
}