import React from "react";

import "./VTList.css";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left", margin: "10px" }}>
      <button
        className="section__Jobs-buttonCompany"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "rgba(0, 187, 172, 0.732)" }
            : { color: "#8892b0" }
        }
      >
        {props.data.expData.company}
      </button>
    </li>
  );
}

export default VTlist;
