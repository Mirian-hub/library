import React, { ReactNode, cloneElement, ReactElement } from "react";
import TRow from "../table-row/TRow";
// import { TRowWrapper } from "../table-row/TRow";

export interface THeadProps {
  children: JSX.Element;
  selectRow?: any;
}

const THead = ({ children, selectRow }: THeadProps) => {
  debugger;
  return (
    <div className="up-table-head">
      {" "}
      {/* {Array(children).map((item) => ( */}
        {/* <TRowWrapper children={children} selectRow={selectRow} /> */}
      {/* ))} */}
      {children}
    </div>
  );
};

export default THead;

// export const THeadWrapper = ({ children, selectRow }) => {
//   return <THead children={children} selectRow={selectRow} />;
// };
