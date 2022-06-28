import React, { ReactNode, useRef } from "react";
import "./table.component.sass";
import { TableDisplayDensityEnum } from "../../enums/table-display-density.enum";
import { TBodyWrapper } from "../table-body/TBody";
import { THeadWrapper } from "../table-head/THead";
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
  selectRow?: boolean;
  align: 'left'|'right';
  hasFilter?: boolean
}

const Table = (props: TableProps) => {
  const textInput = useRef('tableRef');
  const {density, children, selectRow, align} = props
  return (
    <div className={`up-table ${TableDisplayDensityEnum[density]}`}>
      <THeadWrapper hasSelect={selectRow} children={children[0].props.children} align={align}/>
      <TBodyWrapper hasSelect={selectRow} children={children[1].props.children} align={align}/>
    </div>
  );
};

export default Table
