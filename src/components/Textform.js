 
import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        setText(text.toUpperCase());  // Convert text to uppercase
        props.showAlert("converted to Uppercase","success")
    };
    const handleExtraspaces = () => {
        let newText = text.split(/\s+/); // Splits text by one or more spaces
        setText(newText.join(" "));      // Joins the text back with a single space
        props.showAlert("Extra spaces are removed","success")
    };
    
    const handlecopy = () => {
       var text =document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value); 
       props.showAlert("Text has been copied","success")
       
    };
    const handleLowClick = () => {
        setText(text.toLocaleLowerCase()); 
        props.showAlert("converted to Lowercase","success")
    };
    const handleClear = () => {
     
        setText(" ");
        props.showAlert("Text box has been cleared","success")

    };
    const handleCapitalClick = () => {    
        const capitalizedText = text
            .split(' ') 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the array back into a string
        setText(capitalizedText); // Update the state with the new capitalized text
        props.showAlert("First letter of each word has beeb capatilized","success")
    };
    const handleOnChange = (event) => {
        setText(event.target.value);  // Update text state with the current input
    };
    return (
        <>
        <div className="container"style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    id="myBox" 
                    rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}}> 
                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button  className="btn btn-primary" onClick={handleLowClick}>
                Convert to Lowercase
            </button>

            <button  className="btn btn-primary mx-2" onClick={handleClear}>
             Clear words
            </button>
          
            <button  className="btn btn-primary mx-2" onClick={handleCapitalClick}>
             capital first words
            </button>
          

            <button  className="btn btn-primary mx-2" onClick={handlecopy}>
            Copy text
            </button>
          

            <button  className="btn btn-primary mx-2" onClick={handleExtraspaces}>
           Remove Extra spaces
            </button>           
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
       
            <h1>Your text summary</h1>
<p>
  {text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.replace(/\s/g, "").length} characters
</p>
<p>
  {(0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length).toFixed(2)} Minutes to read
</p>


            <h2> Preview</h2>
            <p>{text.length>0?text:"Enter your text in textbox to preview here"}</p>
        </div>
        </>
    );
}
     
