import React, { ReactNode, cloneElement, ReactElement } from "react";
import TRow, { TRowWrapper } from "../table-row/TRow";
// import { TRowWrapper } from "../table-row/TRow";

export interface THeadProps {
  children: JSX.Element;
  hasSelect?: any;
}

const THead = ({ children, hasSelect }: THeadProps) => {
  return (
    <></>
  );
};

export default THead;

export const THeadWrapper = ({ children, hasSelect }) => {
  return <div className="up-table-head">
{<TRowWrapper children={children} hasSelect={hasSelect}/>}
</div>;
};
