import React, { ReactNode } from "react";
import { TRowWrapper } from "../table-row/TRow";
// import { TRowWrapper } from "../table-row/TRow";

export interface TBodyProps {
  children: JSX.Element[] | JSX.Element;
  selectRow?: any;
  hasSelect?: boolean;
  align?: 'left'| 'right'
}

const TBody = ({ children, selectRow }: TBodyProps) => {
  return <></>;
};

export default TBody;

export const TBodyWrapper = ({ children, hasSelect, align }: TBodyProps) => {
  console.log('children from TBodyWrapper', children)
  return (
    <div className="up-table-body">
      {Array.isArray(children) ? (
        children.map((item) => (
          <TRowWrapper children={item} hasSelect={hasSelect} align={align} isForTHead={false} />
        ))
      ) : (
        <TRowWrapper children={children} hasSelect={hasSelect} align={align} isForTHead={false}/>
      )}
      {children}
    </div>
  );
};
