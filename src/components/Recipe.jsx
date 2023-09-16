import React from "react";

const Recipe = ({ recipe }) => {
  return (
    
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mx-auto board">
    <div className="cardbody   d-flex align-items-center justify-content-center ">
      <img src={recipe.image} className="img-fluid img "/>
      <div className="card-body">
        {/* <span className="category">{recipe.}</span> */}
        <h4 className="category h6 text-center">{recipe.label}</h4>
        <a href={recipe.url} className="link" target="_blank">view recipe </a>
      </div>
      </div>
    </div>
  );
};

export default Recipe;
