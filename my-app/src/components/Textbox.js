import React from "react";
import { useState } from "react";

export default function Textbox(props) {
  const UpperCaseclick = () => {
    let newText = Text.toUpperCase();

    SetText(newText);
  };
  const lowerCaseclick = () => {
    let newText = Text.toLowerCase();

    SetText(newText);
  };
  const clearClick = () => {
    let newText = "";

    SetText(newText);
  };
  const reverseWordingsClick = () => {
    let newText = Text.split(" ").reverse().join(" ");

    SetText(newText);
  };
  const reverseWordingsInplaceClick = () => {
    let newText = "";
    for (let i = Text.length - 1; i >= 0; i--) {
      newText += Text[i];
    }
    newText = newText.split(" ").reverse().join(" ");
    SetText(newText);
  };
  const reverseTextClick = () => {
    let newText = "";
    for (let i = Text.length - 1; i >= 0; i--) {
      newText += Text[i];
    }

    SetText(newText);
  };

  const removeSpace = () => {
    let newText = Text.split(/[ ] + /).join(" ");

    SetText(newText);
  };

  const handleOnChange = (event) => {
    SetText(event.target.value);
  };
  const [Text, SetText] = useState("");
  const wordcnt = () => {
    if (Text === "") return 0;
    else return Text.split(" ").length;
  };
  return (
    <>
      <div
        className={`container text-${props.mode === "light" ? "dark" : "light"
          }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textbox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#334155",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            value={Text}
            rows={10}
            defaultValue={""}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={UpperCaseclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={lowerCaseclick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={reverseTextClick}
        >
          Reverse Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={reverseWordingsClick}
        >
          Reverse Wordings
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={reverseWordingsInplaceClick}
        >
          Reverse Text Inplace
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={removeSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={clearClick}>
          Clear Text
        </button>
      </div>
      <div
        className={`container my-3 text-${props.mode === "light" ? "dark" : "light"
          }`}
      >
        <h2>Text summary</h2>
        <p>
          {wordcnt()} words and {Text.length} characters.
        </p>
        <p>
          {(0.0032 * wordcnt()).toFixed(3)} Minutes average expected time read.
        </p>
        <h4>Preview</h4>
        <p>{Text.length ? Text : "Please enter some text above to preview."}</p>
        <hr />
      </div>
    </>
  );
}
