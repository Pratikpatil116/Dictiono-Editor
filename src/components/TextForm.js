import React, {useState} from 'react'
import Footer from "./Footer/Footer";

// import copy from "copy-to-clipboard";  

export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text");
    
    const convertUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");

    }
    const convertLower = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
       

    }
    const clearScreen = () =>{
        
        setText("")
        alert("Clear TextField")
        props.showAlert("Screen Clear","success");

    }
    const copyClipboard = () =>{ // this is use for copying to clipboard
        let newText = document.getElementById("myText");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied to ClipBoard","success");

    }
    const handlespaces =()=>{
        let newText = text.split(/[ ]+/); // this id for handling spaces between text
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
        }

    const checkOnchange = (event) =>{
        
        setText(event.target.value)

    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#154360'}}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={checkOnchange} style={{backgroundColor: props.mode==='dark'?'#154360':'white', color: props.mode==='dark'?'white':'#424949'}} id="myText" rows="6"></textarea>
            </div>
            <div>
            <button type="button " className="btn btn-success mx-2 my-2" onClick={convertUpper}>Convert To UpperCase</button>
            <button type="button" className="btn btn-success mx-2 my-2" onClick={convertLower}>Convert To LowerCase</button>
            <button type="button" className="btn btn-success mx-2 my-2" onClick={clearScreen}>Clear</button>
            <button type="button" className="btn btn-success mx-2 my-2" onClick={copyClipboard}>Copy Text</button>
            <button type="button" className="btn btn-success" onClick={handlespaces}>RemoveExtraSpaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Edited Code</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words And {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes it takes to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>
            <Footer />
        </>
    )
}
