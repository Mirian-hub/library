import React, { ReactNode, cloneElement, ReactElement } from "react";
import TRow from "../table-row/TRow";
export interface THeadProps {
  children: JSX.Element;
}

const THead = ({ children }: THeadProps) =>
//   Array(children).map((item) => {
//     const clonedEl = cloneElement(item, { header: true });
//     return clonedEl;
//   });
<div className="up-table-head"> {children}</div>

export default THead;
