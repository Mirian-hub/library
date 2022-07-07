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
  hasSelect?: boolean;
  align: 'left'|'right';
  hasFilter?: boolean
}

const Table = (props: TableProps) => {
  console.log('props from TB', props)
  const {density, children, hasSelect, align} = props
  debugger
  return (
    <div className={`up-table ${TableDisplayDensityEnum[density]}`}>
      <THeadWrapper hasSelect={hasSelect} children={children[0].props.children} align={align}/>
      <TBodyWrapper hasSelect={hasSelect} children={children[1].props.children} align={align}/>
    </div>
  );
};

export default Table
