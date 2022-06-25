import React, { ReactNode } from "react";
import "../table/table.component.sass";
export interface THCellProps {
  children: ReactNode;
}

const THCell = ({ children }: THCellProps) => {
  return (
    <div className="up-table-th">
      <div className="up-table-th-label">{children}</div>
    </div>
  );
};

export default THCell;
