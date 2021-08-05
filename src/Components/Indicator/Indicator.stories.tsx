// import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Indicator, IndicatorType} from "./Indicator";
import {useState} from "react";
import {RatingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Components/Indicator stories',
    component: Indicator,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Indicator>;

const Template: ComponentStory<typeof Indicator> = (props) => <Indicator {...props} />;

export const NoClickIndicator = Template.bind({});
NoClickIndicator.args = {
    on: false,
    set: action("on/off clicked")
};




export const ClickIndicator = () => {
    let [value, setValue] = useState<boolean>(false);
   return <Indicator on={value} set={setValue}/>
}

