import React from "react";

export const Home = ({ scrollToElement }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light  fixed-top navbarh ">
        <div className="container-fluid navhead">
          <a class="navbar-brand" id={"home"} href="#">
            Google for
            <br />recipe
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 navul">
              <li className="nav-item">
                <a
                  className="nav-link active navtitle" 
                  onClick={() => scrollToElement("home")}
                  href="#home"
                  aria-current="page"
                >
                  Home <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active navtitle"
                  onClick={() => scrollToElement("recipe")}
                  href="#recipe"
                >
                  Recipe
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid hompg d-flex justify-content-center align-items-center bgimg">
         <div className="details">
          <h2 className="first">search across 2million+ recipes</h2>
              <div className="sidehead">
              <p className="second">we don't share recipes</p>
            <p className="second">we share emotions</p>
            <button className="btnn  second"                   
            onClick={() => scrollToElement("recipe")}
           >Search</button>
              </div>
          </div>
          
       
    </div>




    </div>
  );
};