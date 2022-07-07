import React, { useState } from "react";
import CloseMediumSvj from "../../../../svgComponents/CloseMedium";

import "./tableFilterTemplate.sass";

const TableFilterTemplate = ({ open, toggleGialod }) => {
  debugger
  return (
    open && (
      <div className="modal">
        <span className="closeIcon" onClick={toggleGialod}>
          <CloseMediumSvj />
        </span>
        <p> Dates</p>
        <input type="date" id="birthday" name="birthday"></input>
        <input
          type="date"
          id="birthday"
          name="birthday"
          style={{ float: "right" }}
        ></input>
        <button className="dialogBtn" onClick={toggleGialod}>
          {" "}
          search{" "}
        </button>
      </div>
    )
  );
};

export default TableFilterTemplate;
