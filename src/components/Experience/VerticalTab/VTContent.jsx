import React from "react";
import "./VTContent.css";
import ExperienceImg from '../../Image/ExperienceImg';
import PropTypes from 'prop-types';



function VTcontent({index, data, activeTabId}) {
  let expData = data.expData;

  return (
    <div
      key={index}
      className="section__Jobs-styledContent"
      style={
        activeTabId === index
          ? { display: "block" }
          : { display: "none" }
      }
    >
        <div>
          <ExperienceImg alt="company logo" filename={expData.img} />
        </div>
      <h4>{expData.position}</h4>

      <h5>{expData.period}</h5>
      {expData.details.map(detail => (
        <p className="section__Jobs-detail">{detail}</p>
      ))}
    </div>
  );
}

VTcontent.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number, 
  activeTabId: PropTypes.number
};

export default VTcontent;
