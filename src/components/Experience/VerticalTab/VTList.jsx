import React from "react";
import "./VTList.css";

import PropTypes from 'prop-types';


function VTlist({onClick, index, data, activeTabId}) {
  const Clicked = () => {
    onClick(index);
  };

  return (
    <li key={index} style={{ listStyle: "none", textAlign: "left" }}>
      <button
        className="section__Jobs-buttonCompany" 
        onClick={Clicked}
        style={
          activeTabId === index
            ? { color: "rgba(0, 187, 172, 0.732)" }
            : { color: "#8892b0" }
        }
      >
        {data.expData.company}
      </button>
    </li>
  );
}

VTlist.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func.isRequired , 
  index: PropTypes.number, 
  activeTabId: PropTypes.number
};

export default VTlist;
