import React, { ReactNode, useState } from "react";
import "../table/table.component.sass";
import TableFilterTemplate from "../table-filter-template/TableFilterTemplate";
import { CheckBox } from "../../../checkBox/CheckBox";

export interface THCellProps {
  children: ReactNode;
  hasFilter?: boolean;
  filter?: Filter;
}
export interface THCellWrapperProps {
  children: any;
  filter?: Filter;
  align?: "left" | "right";
  filterTemplate?: JSX.Element;
  hasSelect: boolean;
}

export interface Filter {
  icon: ReactNode;
  align: "left" | "right";
}

const THCell = ({ children, hasFilter }: THCellProps) => {
  return <></>;
};

export default THCell;

export const THCellWrapper = ({
  children,
  align,
  hasSelect,
}: THCellWrapperProps) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal((prev) => !prev);
  const data = children.props.children;
  const filter = children.props.filter;
  return (
    <div
      className={`up-table-th ${align === "right" ? "table-align-right" : ""} ${hasSelect && "up-table-checkbox"}` }
    >
      {hasSelect ? (
        <CheckBox />
      ) : (
        <div className="up-table-th-label">
          {filter ? (
            <div style={{ position: "relative" }}>
              {filter.align === "left" ? (
                <>
                  <i className="filter-icon" onClick={toggleModal}>
                    {filter.icon}{" "}
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
                    {filter.icon}{" "}
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
