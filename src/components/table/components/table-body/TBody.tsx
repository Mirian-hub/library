import React, { ReactNode } from "react";

export interface TBodyProps {
  children: JSX.Element[] | JSX.Element;
}

const TBody = ({ children }: TBodyProps) => (
  <div className="up-table-body">{Array(children).map((item) => item)}</div>
);

export default TBody;
