import React from "react";
import { TCellWrapper } from "../table-cell/TCell";
import "../table/table.component.sass";

export interface TRowProps {
  children: JSX.Element[];
  header?: boolean;
  hasSelect?: any;
}

const TRow = ({ children, hasSelect }: TRowProps) => {
  return <></>;
};

export default TRow;

export const TRowWrapper = ({ children, hasSelect }) => {
  console.log('pr',children)
  console.log('pr has Sel', hasSelect)
  const checkBox = (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
    </div>
  );
  return (
    <div className="up-table-row">
      {hasSelect &&  checkBox}
      {children.props.children.map((item) => (
        <>
        
        <TCellWrapper children={item} hasSelect={hasSelect} />
        </>
      ))}
      {/* {Array.isArray(children) ? (
        
      ) : (
        <TCellWrapper children={children} hasSelect={hasSelect} />
      )} */}
    </div>
  );
};
