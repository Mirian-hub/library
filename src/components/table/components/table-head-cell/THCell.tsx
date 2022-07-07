import React, { ReactNode, useState } from "react";
import "../table/table.component.sass";
import TableFilterTemplate from "../table-filter-template/TableFilterTemplate";
import { CheckBox } from "../../../checkBox/CheckBox";

export interface THCellProps {
  children: ReactNode;
  filterIcon?: JSX.Element;
  filterAlign?: 'left'| 'right';
}
export interface THCellWrapperProps {
  children: any;
  filterIcon?: JSX.Element;
  filterAlign?: 'left'|'right';
  align?: "left" | "right";
  filterTemplate?: JSX.Element;
  hasSelect: boolean;
  forHeader?: boolean
}


const THCell = ({ children, filterIcon, filterAlign }: THCellProps) => {
  return <></>;
};

export default THCell;

export const THCellWrapper = ({
  children,
  align,
  hasSelect,
  forHeader
}: THCellWrapperProps) => {
  console.log('filter from THCellWrapper', children)
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal((prev) => !prev);
  const data = children.props.children;
  const {filterIcon, filterAlign} = children.props;
  return (
    <div
      className={`up-table-th ${align === "right" ? "table-align-right" : ""} ${hasSelect && "up-table-checkbox"}` }
    >
      {hasSelect  ? (
        <CheckBox />
      ) : (
        <div className="up-table-th-label">
          {filterIcon ? (
            <div style={{ position: "relative" }}>
              {filterAlign === "left" ? (
                <>
                  <i className="filter-icon" onClick={toggleModal}>
                    {filterIcon}
                  </i>
                  <TableFilterTemplate
                    open={openModal}
                    toggleGialod={toggleModal}
                  />
                  {data}
                </>
              ) : (
                <>
                  {data}
                  <i className="filter-icon" onClick={toggleModal}>
                    {filterIcon}
                  </i>
                  <TableFilterTemplate
                    open={openModal}
                    toggleGialod={toggleModal}
                  />
                </>
              )}
            </div>
          ) : (
            data
          )}
        </div>
      )}
    </div>
  );
};
