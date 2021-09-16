import React, { useState } from "react";

export default function TextForm(props) {
  // Upper Case Click Function
  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("Enter Some Data", "danger");
    } else {
      props.showAlert("Converted to Upper Case", "success");
      let newText = text.toUpperCase();
      setText(newText);
      setUppertxt("Converted Successfully!");
      setUpperButtonColor("btn btn-success my-3 mx-1");

      function offbtntime() {
        setTimeout(() => {
          setUpperButtonColor("btn btn-primary my-3 mx-1");
          setUppertxt("Converted to Upper Case");
        }, 1500);
      }
      offbtntime();
    }

    
    setLowerButtonColor("btn btn-primary my-3 mx-1");
    setTitleButtonColor("btn btn-primary my-3 mx-1");
    setCopyDataBtn("btn btn-primary my-3 mx-1");
    setCopyDatatxt("Copy to Clip-Board");

    
    setlowertxt("Convert to Lower Case");
    settitletxt("Convert to Title Case");
  };

  // Lower Case Click Function
  const handlelwClick = () => {
    if (text.length === 0) {
      props.showAlert("Enter Some Data", "danger");
    } else {
      props.showAlert("Converted to Lower Case", "success");
      let newText = text.toLocaleLowerCase();
      setText(newText);
      setLowerButtonColor("btn btn-success my-3 mx-1");
      setlowertxt("Converted Successfully!");
      function offbtntime() {
        setTimeout(() => {
          setLowerButtonColor("btn btn-primary my-3 mx-1");
          setlowertxt("Converted to Lower Case");
        }, 1500);
      }
      offbtntime();

    }
    

    setUpperButtonColor("btn btn-primary my-3 mx-1");
    setTitleButtonColor("btn btn-primary my-3 mx-1");
    setCopyDataBtn("btn btn-primary my-3 mx-1");
    setCopyDatatxt("Copy to Clip-Board");    
    settitletxt("Convert to Title Case");
    setUppertxt("Convert to Upper Case");
  };

  // Title Case Click Function
  const handlescClick = () => {
    if (text.length === 0) {
      props.showAlert("Enter Some Data", "danger");
    } else {
      var sentence = text.toLowerCase().split(" ");
      for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
      let newText = sentence.join(" ");
      setText(newText);
      props.showAlert("Converted to Sentence Case", "success");
      settitletxt("Converted Successfully!");
      setTitleButtonColor("btn btn-success my-3 mx-1");

      function offbtntime() {
        setTimeout(() => {
          setTitleButtonColor("btn btn-primary my-3 mx-1");
          settitletxt("Converted to Sentence Case");
        }, 1500);
      }
      offbtntime();

    }

    setUpperButtonColor("btn btn-primary my-3 mx-1");
    setLowerButtonColor("btn btn-primary my-3 mx-1");
    
    setCopyDataBtn("btn btn-primary my-3 mx-1");
    setCopyDatatxt("Copy to Clip-Board");

    setlowertxt("Convert to Lower Case");
    setUppertxt("Convert to Upper Case");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setCopyDataBtn("btn btn-primary my-3 mx-1");
    setCopyDatatxt("Copy to Clip-Board");
  };

  // Copy Data Click Function
  const copydatebtn = () => {
    if (text.length === 0) {
      props.showAlert("Enter Some Data", "danger");
    } else {
      var copyText = document.getElementById("datatext");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999);

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);

      setCopyDatatxt("Coppied Data");
      props.showAlert("Converted to Sentence Case", "success");
      setCopyDataBtn("btn btn-success my-3 mx-1");

      function offbtntime() {
        setTimeout(() => {
          setCopyDataBtn("btn btn-primary my-3 mx-1");
          setCopyDatatxt("Copy to Clip-Board");
        }, 1500);
      }
      offbtntime();
    }

    setUpperButtonColor("btn btn-primary my-3 mx-1");
    setLowerButtonColor("btn btn-primary my-3 mx-1");
    setTitleButtonColor("btn btn-primary my-3 mx-1");
    
  };

  // Using UseState
  const [text, setText] = useState("");

  const [UpperButtonColor, setUpperButtonColor] = useState(
    "btn btn-primary my-3 mx-1"
  );

  const [lowerButtonColor, setLowerButtonColor] = useState(
    "btn btn-primary my-3 mx-1"
  );

  const [titleButtonColor, setTitleButtonColor] = useState(
    "btn btn-primary my-3 mx-1"
  );

  const [copyDataBtn, setCopyDataBtn] = useState("btn btn-primary my-3 mx-1");

  const [copyDatatxt, setCopyDatatxt] = useState("Copy to Clip-Board");

  const [lowertxt, setlowertxt] = useState("Convert to Lower Case");

  const [uppertxt, setUppertxt] = useState("Convert to Upper Case");

  const [titletxt, settitletxt] = useState("Convert to Title Case");

  return (
    <>
      <div className="container my-4">
        <div className="form-group">
          <label
            htmlFor="exampleFormControlTextarea1"
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {props.heading}
          </label>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="datatext"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "light"
                  ? "white"
                  : "rgba(33,37,41,255)                ",
              color: props.mode === "light" ? "black" : "white",
            }}
          />
        </div>

        {/* Upper Case Button */}
        <button
          className={UpperButtonColor}
          onClick={handleUpClick}
          id="uppercase"
        >
          {uppertxt}
        </button>

        {/* Lower Case Button */}
        <button
          className={lowerButtonColor}
          id="lowerbutton"
          onClick={handlelwClick}
        >
          {lowertxt}
        </button>

        {/* Title Case Button */}
        <button
          className={titleButtonColor}
          id="titlecase"
          onClick={handlescClick}
        >
          {titletxt}
        </button>

        <button className={copyDataBtn} id="copydata" onClick={copydatebtn}>
          {copyDatatxt}
        </button>

        <hr
          style={{
            backgroundColor:
              props.mode === "light" ? "rgba(33,37,41,255)" : "white",
          }}
        />
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <div className="container">
          <p>
            &nbsp;&nbsp;
            {text.split(" ").length - 1} Words, {text.length} Characters
          </p>

          <div className="alert alert-info" role="alert">
            You can read this in {0.008 * (text.split(" ").length - 1)} Minuts.
          </div>

          <div className="container my-3">
            <h2>Preview</h2>
            <p>
              {text.length > 0
                ? text
                : "Enter Something in the text box above to preview it here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
