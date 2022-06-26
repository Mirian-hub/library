import React, { ReactNode } from "react";
// import { TRowWrapper } from "../table-row/TRow";

export interface TBodyProps {
  children: JSX.Element[] | JSX.Element;
  selectRow?: any;
}

const TBody = ({ children, selectRow }: TBodyProps) => {
  debugger;
  return (
    <div className="up-table-body">
      {/* {Array(children).map((item) => (
        <TRowWrapper children={item} selectRow={selectRow} />
      ))} */}
      {children}
    </div>
  );
};

export default TBody;

// export const TBodyWrapper = ({ children, selectRow }) => {
//   return <TBody children={children} selectRow={selectRow} />;
// };
