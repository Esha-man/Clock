// import React from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";

export default {
    title: 'Components/Rating stories',
    component: Rating,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (props) => <Rating {...props} />;

export const zeroRating = Template.bind({});
zeroRating.args = {
    value: 0,
    click: () => {}
};



export const ChangeRating = (args) => {
    let [value, setValue] = useState<RatingValueType>(0);
    return <Rating value={value} click={setValue}/>
}


