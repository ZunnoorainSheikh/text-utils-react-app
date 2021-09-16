import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border:"1px solid white"
  });


  const [darkBtnText, setdarkBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if ((myStyle.color === "black")) {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border:"1px solid white"
      });
      setdarkBtnText("Enable Light Mode")
    } 
    else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });

      setdarkBtnText("Enable Dark Mode")
      
    }
  };


  return (
    
    <>
      <div className="container my-3">
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary my-3 mx-3" onClick={toggleStyle}>
          {darkBtnText}
        </button>
      </div>
    </>
  );
}
