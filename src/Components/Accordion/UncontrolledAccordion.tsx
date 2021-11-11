import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}




type AccordionTitlePropsType = {
    title: string
    click: () => void
}

function OldAccordionTitle(props: AccordionTitlePropsType) {
     console.log("Accordion-Title");

    return (
        <>
            <h3 onClick={ () => {props.click()} }>***{props.title}***</h3>
        </>
    );
}

const AccordionTitle = React.memo(OldAccordionTitle)


function OldAccordionBody(props: any) {
 console.log("Accordion-Body");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


const AccordionBody = React.memo(OldAccordionBody)


 const OldUncontrolledAccordion = (props: AccordionPropsType) => {
    console.log("Uncontrolled-Accordion")

    let [state, dispatch] = useReducer(reducer, {collapsed: false})




    return (
        <>
            <AccordionTitle title={props.titleValue} click={ () => {dispatch({type: "CHANGE-STATE"})} }/>
            {!state.collapsed && <AccordionBody/>}
        </>
    );
}
export const UncontrolledAccordion = React.memo(OldUncontrolledAccordion)
// export default OldUncontrolledAccordion;