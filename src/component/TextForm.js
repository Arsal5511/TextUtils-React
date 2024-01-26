import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success")
    }

    const clearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text has been Cleared!", "success")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("listen", "success")
      }

    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to clipboard", "success")
    }

    const spaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Extra spaces removed!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('');

    return (
        <>
            <div className='container'style={{color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#10192a' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copy}>Coppy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={spaces}>Remove Extra Spaces</button>


            <div className="container my-2">
                <h1>your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <p>Time spent for analyzing your text is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
                <h2>
                    Preview
                </h2>
                <p>{text.length>0?text:"Enter your something in the textbox above to preview it here."}</p>

            </div>
            </div>
        </>
    )
}
