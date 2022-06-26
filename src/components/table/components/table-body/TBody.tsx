import React, { ReactNode } from "react";
import { TRowWrapper } from "../table-row/TRow";
// import { TRowWrapper } from "../table-row/TRow";

export interface TBodyProps {
  children: JSX.Element[] | JSX.Element;
  selectRow?: any;
}

const TBody = ({ children, selectRow }: TBodyProps) => {
  return <></>;
};

export default TBody;

export const TBodyWrapper = ({ children, hasSelect }) => {
  return (
    <div className="up-table-body">
      {Array.isArray(children) ? (
        children.map((item) => (
          <TRowWrapper children={item} hasSelect={hasSelect} />
        ))
      ) : (
        <TRowWrapper children={children} hasSelect={hasSelect} />
      )}
      {children}
    </div>
  );
};
