// import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from "./Accordion";
import {useState} from "react";
import {action} from "@storybook/addon-actions";




export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
      color: {
          control: "color",
          table: {
              category: "Colors"
          }
      },
    },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (props) => <Accordion {...props} />;

export const NonClickAccordion = Template.bind({});
NonClickAccordion.args = {
    titleValue: "Menu",
    collapsed: false,
    set: action(`Accordion clicked!`)
};


export const ClickedAccordion = () => {
    let [collaps, setCollaps] = useState<boolean>(true)
    const change = () => {
        setCollaps(!collaps)
    }
 return <Accordion titleValue={"Menu"} collapsed={collaps} set={change}/>
}