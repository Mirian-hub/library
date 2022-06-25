import React, { ReactNode } from "react";
import "./table.component.sass";
import { TableDisplayDensityEnum } from "../../enums/table-display-density.enum";

export interface TableProps {
  density: keyof typeof TableDisplayDensityEnum;
  children: ReactNode;
}

const Table = ({ density, children }: TableProps) => {
  return (
    <div className={`up-table ${TableDisplayDensityEnum[density]}`}>
      {/* <div className="up-table-head">{THead}</div>
      <div className="up-table-body">{TBody}</div> */}
      {children}
    </div>
  );
};

export default Table
