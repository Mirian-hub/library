import React from "react";
import { TCellWrapper } from "../table-cell/TCell";
import { THCellWrapper } from "../table-head-cell/THCell";
import "../table/table.component.sass";

export interface TRowProps {
  children: JSX.Element[];
  header?: boolean;
  hasSelect?: any;
  isTH?: boolean;
}

export interface TRowWrapperProps {
  children: any,
   hasSelect?: boolean,
  align?: 'left'| 'right',
  isForTHead?: boolean,
}

const TRow = ({ children, hasSelect }: TRowProps) => {
  return <></>;
};

export default TRow;

export const TRowWrapper = ({ children, hasSelect, align, isForTHead }: TRowWrapperProps) => {
  // const checkBox = (
  //   <div className="form-check">
  //     <input
  //       className="form-check-input"
  //       type="checkbox"
  //       value=""
  //       id="flexCheckDefault"
  //     />
  //   </div>
  // );
  return (
    <div className="up-table-row">
      {isForTHead ? (
          <THCellWrapper children={<></>}  align={align} hasSelect={true}/>
        ) : (
          <TCellWrapper children={<></>}  align={align} hasSelect={true} />
        )}
      {children.props.children.map(( item, i) =>
        isForTHead ? (
          <THCellWrapper children={item}  align={align} hasSelect={false}/>
        ) : (
          <TCellWrapper children={item}  align={align} hasSelect={false} />
        )
      )}
    </div>
  );
};
