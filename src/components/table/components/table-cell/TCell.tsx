import React, { ReactNode } from "react";
import "../table/table.component.sass";
import { CheckBox } from "../../../checkBox/CheckBox";

export interface TCellProps {
  children: any;
  hasSelect?: any;
  align?: "left" | "right";
}

const TCell = ({ children }: TCellProps) => {
  return <></>;
};

export default TCell;

export const TCellWrapper = ({ children, align, hasSelect }: TCellProps) => {
  console.log('children from TCellWrapper', children)
  return (
    <div className={`up-table-td ${align === "right" ? "table-align-right": ''} ${hasSelect && "up-table-checkbox"}`}>
      {hasSelect ? <CheckBox/> :children.props.children  }
    </div>
  );
};
