import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { ButtonColors, ButtonTypes, ButtonWidths } from "./button.constants";
import { AppThemes } from "../theme/types/types";
import {IconTypes} from "../IconTypes"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click me!!!",
    width: ButtonWidths.FIXED,
    color: ButtonColors.DANGER,
    type: ButtonTypes.SECONDARY,
    theme: AppThemes.DARK,
    disabled: false,
    icon: 'accounts_payable_medium'
};
