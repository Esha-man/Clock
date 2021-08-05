// import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledRating, UncontrolledRatingValueType, RatingPropsType} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Uncontrolled Components/UncontrolledRating',
    component: UncontrolledRating,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (props) => <UncontrolledRating {...props} />;

export const ClearUncontrolledRating = Template.bind({});
ClearUncontrolledRating.args = {
    startValue: 0,
    changeValue: action("Star clicked")
};





