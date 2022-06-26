import React, { ReactNode, useRef } from "react";
import "./table.component.sass";
import { TableDisplayDensityEnum } from "../../enums/table-display-density.enum";
// import { TRowWrapper } from "../table-row/TRow";
// import THead, { THeadWrapper } from "../table-head/THead";
// import TBody, {TBodyWrapper} from "../table-body/TBody";
export interface SelecRowProps {
  mode?: string,
  selected? : number[]
}

export interface TableProps {
  density: keyof typeof TableDisplayDensityEnum;
  children: ReactNode;
  selectRow?: SelecRowProps
}

const Table = ({ density, children, selectRow }: TableProps) => {
  const textInput = useRef('tableRef');
  debugger
  return (
    <div className={`up-table ${TableDisplayDensityEnum[density]}`}>
      {/* <div className="up-table-head">{THead}</div>
      <div className="up-table-body">{TBody}</div> */}
      {/* <THeadWrapper children={children[0].props.children} selectRow={selectRow}/>
      <TBodyWrapper children={children[1].props.children} selectRow={selectRow}/> */}
      {children}
    </div>
  );
};

export default Table
