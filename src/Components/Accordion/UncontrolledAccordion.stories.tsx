// import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {useState} from "react";
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";




export default {
    title: 'Uncontrolled Components/UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
      color: {
          control: "color",
          table: {
              category: "Colors"
          }
      },
    },
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (props) => <UncontrolledAccordion {...props} />;

export const ClickAccordion = Template.bind({});
ClickAccordion.args = {
    titleValue: "Users",
};


