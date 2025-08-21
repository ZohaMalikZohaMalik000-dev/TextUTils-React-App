// rfc
import React, { useState } from 'react';

export default function TextForm(props) {

  // ✅ useState ko top pe 
    // const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success");
}
const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase","success");
}

    const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
        }
    
    // user challenge in good way
    const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // alert("Text copied!");
    props.showAlert("copy data", "success");
    };
        //user coding wal
        const handleExtraSpaces = () => {
            let newText = text.split(/[ ] + /);
            setText(newText.join(" "));
            props.showAlert("removed space", "success");
        };
        //clear test by me 
        const handleClearText = () => {
        setText(""); // text state ko empty string ban degA
        props.showAlert("clear data", "success");
        };
    //     // first letter capital
    // const handleCapitalize = () => {
    // const newText = text
    //     .toLowerCase()
    //     .split(" ")
    //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //     .join(" ");
    // setText(newText);
    // };


    
    //  const [text, setText] = useState('Enter text here');
        const [text, setText] = useState('');

    return (
    <div>
            {/* The code snippet you provided is a commented-out JSX block in a React component. It looks
            like it was intended to be a container with a heading, a text area, and some styling based
            on the `props.mode` value. However, since it is commented out, it is not being rendered or
            affecting the functionality of the component. */}
    <div className="container" /*style={{color: props.mode === 'dark' ? 'white' : '#42743'}}*/>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea  className="form-control"  value={text}  onChange={handleOnChange}/* style={{backgroundColor: props.mode === 'dark' ? 'white' : #194571ff,
            color: props.mode === 'dark' ? 'white' : '#194571ff'}} */id="myBox"  rows="8"></textarea>
    </div>
<div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear data</button>
         {/* <button className="btn btn-primary mx-1" onClick={handleCapitalize}>1st Capital </button> */}
        </div>
    </div>
        <div className="container mb-3"/* style={{color: props.mode === 'dark' ? 'white' : '#42743'}}*/></div>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").filter((element) => {return element.length!==0}).length}  Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    ); 
}