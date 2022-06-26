import React, { ReactNode } from "react";
import "../table/table.component.sass";
export interface THCellProps {
  children: ReactNode;
  hasFilter?: boolean;
}

const THCell = ({ children, hasFilter }: THCellProps) => {
  const hasChildren = Array.isArray(children)
  const ArrayOfChildren = Array(children)
  // console.log('children check',children)
  // console.log('ArrayOfChildren[1]',ArrayOfChildren[1])

  return (
    <div className="up-table-th">
      <div className="up-table-th-label">{hasChildren ? children[0] : children}
      {hasFilter && <i className="filter-icon">{hasChildren ? children[1] : children }</i> }
      </div>
      
    </div>
  );
};

export default THCell;
