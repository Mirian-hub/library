import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonStory from "./ButtonStory";
import { ButtonColors, ButtonTypes, ButtonWidths } from "./button.constants";
import { AppThemes } from "../theme/types/types";
import {IconTypes} from "../IconTypes"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Button",
    component: ButtonStory,
} as ComponentMeta<typeof ButtonStory>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonStory> = (args) => <ButtonStory {...args} />;


export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click me!!!",
    width: ButtonWidths.FIXED,
    color: ButtonColors.DANGER,
    type: ButtonTypes.SECONDARY,
    theme: AppThemes.DARK,
    disabled: false,
    icon: '',
    trailingIcon: ''
};
