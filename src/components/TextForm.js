import React, { useState } from 'react'
export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");

    }
    const removeExtraSpace = (text) => {
        var i = 0;
        var word = Array.from(text);
        while (i < word.length) {
            if (word[i] === " " && word[i + 1] === " ") {
                const halfBeforeTheUnwantedElement = word.slice(0, i);
                word = halfBeforeTheUnwantedElement.concat(word.slice(i + 1));
            }
            else {
                i++;
            }
        }

        return word;
    }
    function getCount(word) {

        var i = 0;
        var count = 0;
        while (i < word.length) {
            if (word[i] === " ") {
                i++;
                count++;
            }
            else {
                i++;
            }
        }
        return count;
    }
    const words = (text) => {

        var word = removeExtraSpace(text);
        var count = getCount(word);

        return count
    }



    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    // setText("new text");

    return (
        <>

            <div className='container'>


                <div className="mb-3">
                    <h2 >
                        Enter text here</h2>
                    <textarea className="form-control myPara"
                        value={text} onChange={handleOnChange} rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}   >Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}   >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clearText} >Clear the Text</button>

            </div>
            <div className="container my-3">
                <h2 >Your text summary</h2>
                <p>{words(text)} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "enter something in textbox above to preview"}</p>
            </div>

        </>
    )
}
