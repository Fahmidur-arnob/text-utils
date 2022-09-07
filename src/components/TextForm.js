import React, { useState } from 'react'


export default function TextForm(props) {
    const upClickHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const loClickHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');//enter text here is the default here; jokhon e ami text re update korte jamu tohon amr setText Use korai lagbe;

    return (
        <>
            <div className="container">
                <h1 class="container text-center fw-bold mb-2 mt-5 g-3 border border-warning text-white bg-dark rounded-4">{props.heading}</h1>

                <div class="rounded-4">

                    <textarea class="form-control rounded-5 bg-warning fs-3" id="myTextBox" value={text} onChange={onChangeHandler} rows="8"></textarea>

                </div>

                <div className="d-flex mx-auto gap-4">
                    <button className="btn btn-warning btn-brand mt-3 rounded-5 border border-danger" onClick={upClickHandler}>UpperCase</button>

                    <button className="btn btn-warning btn-brand mt-3 rounded-5 border border-danger" onClick={loClickHandler}>LowerCase</button>
                </div>

            </div>
            <div className="container">
                <h1 class="container text-center fw-bold mb-2 mt-5 g-3 border border-danger text-white rounded-4 bg-dark">Your Text Summary</h1>

                <div class="border bg-warning rounded-4">
                    <p class="container text-center mt-2 p-2 fs-4 fw-semibold">Your Text Has {text.split(" ").length} and {text.length} Characters.</p>


                    <p class="text-center fw-semibold fs-4">{0.008 * text.split(" ").length} minutes to read</p>
                </div>

                <h2 class="container mt-5 text-center border border-white text-white rounded-4 bg-dark">Preview</h2>

                <div className="border bg-warning rounded-4">
                    <p class="text-center fw-semibold fs-4 mb-5 p-5 mt-5 text-success">{text}</p>
                </div>
            </div>
        </>
    )
}
