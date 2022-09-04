import React from "react";

const newDetailCard = ({title1,desc1}) => {
  return (
    <>
      {/* <!-- Basic Card Example --> */}
      <div className="col">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{title1}</h6>
        </div>
        <div className="card-body">
          {desc1} <br/>
          {/* {desc} <br/>
          {desc} <br/>
          {desc}  */}
        </div>
      </div>
      </div>
    </>
  );
};

export default newDetailCard;
