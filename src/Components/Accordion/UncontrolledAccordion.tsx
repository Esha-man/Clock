import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string


}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(false)



        return (
            <>
                <AccordionTitle title={props.titleValue} click={ () => {setCollapsed(!collapsed)} }/>
                {!collapsed && <AccordionBody/>}
            </>
        );
}

export default UncontrolledAccordion;

type AccordionTitlePropsType = {
    title: string
    click: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");

    return (
        <>
            <h3 onClick={ () => {props.click()} }>***{props.title}***</h3>
        </>
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