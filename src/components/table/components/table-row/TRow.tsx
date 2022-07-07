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
  console.log('hasSelect', hasSelect)
  return (
    <div className="up-table-row">
      {isForTHead ? (
          hasSelect && <THCellWrapper children={<></>}  align={align}  hasSelect={hasSelect} />
        ) : (
          hasSelect && <TCellWrapper children={<></>}  align={align} hasSelect={hasSelect} />
        )}
      {children.props.children.map(( item, i) =>
        isForTHead ? (
          <THCellWrapper children={item} key={i}  align={align} hasSelect={false}/>
        ) : (
          <TCellWrapper children={item} key={i}  align={align} hasSelect={false} />
        )
      )}
    </div>
  );
};
