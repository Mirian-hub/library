import React, { ReactNode } from "react";
import "../table/table.component.sass";
export interface TCellProps {
  children: any;
  hasSelect?: any;
  align?: "left" | "right";
}

const TCell = ({ children }: TCellProps) => {
  return <></>;
};

export default TCell;

export const TCellWrapper = ({ children, align }: TCellProps) => {
  console.log("TCellWrapper", children);

  return (
    <div className={`up-table-td ${align === "right" ? "table-align-right": ''}`}>
      {children.props.children}
    </div>
  );
};
