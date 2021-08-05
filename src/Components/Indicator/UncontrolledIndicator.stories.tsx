// import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrIndicator} from "./UncontrIndicator";
import {action} from "@storybook/addon-actions";





export default {
    title: 'Uncontrolled Components/UncontrIndicator',
    component: UncontrIndicator,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof UncontrIndicator>;

const Template: ComponentStory<typeof UncontrIndicator> = (props) => <UncontrIndicator {...props} />;

export const ClickUncontrIndicator = Template.bind({});
ClickUncontrIndicator.args = {
    change: action("Clicked on/off"),
    defaultOn: false
};




