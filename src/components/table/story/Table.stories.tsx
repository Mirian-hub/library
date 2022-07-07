import React, { ReactNode } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table, TBody, THCell, TCell, THead, TRow } from "../components";
import Button from "../../Button";
import SvgFilterActiveMedium from "../../../svgComponents/FilterActiveMedium";
import SvgFilterSmall from "../../../svgComponents/FilterSmall";

import { AppThemes } from "../../theme/types/types";
import Icon from "../../Icon/Icon";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>
    <THead>
      <TRow>
        <THCell  filterIcon={<SvgFilterSmall />} filterAlign='left'>
          Column 1 with filter
        </THCell>
        <THCell  filterIcon={<SvgFilterSmall />} filterAlign='right'       
        > 
          Columnt 2 with filter
        </THCell>
        <THCell>Title 3</THCell>
        <THCell>Buttons</THCell>
      </TRow>
    </THead>
    <TBody>
      <TRow>
        <TCell>val 1.1</TCell>
        <TCell>val 1.2</TCell>
        <TCell>val 1.3</TCell>
        <TCell>
          <Button type="rounded">text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button>text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button type="rounded">text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button>text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button type="rounded">text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button>text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button>text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button type="rounded">text</Button>
        </TCell>
      </TRow>
      <TRow>
        <TCell>val 2.1</TCell>
        <TCell>val 2.2</TCell>
        <TCell>val 2.3</TCell>
        <TCell>
          <Button  >text</Button>
        </TCell>
      </TRow>
    </TBody>
  </Table>
);

export const SimpleTable = Template.bind({});
SimpleTable.args = {
 density: 'relaxed',
 children: <></>,
 hasSelect: true,
 align: 'left',
 hasFilter: true
};
