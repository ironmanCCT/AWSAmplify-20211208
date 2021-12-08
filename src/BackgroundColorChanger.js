import React from 'react'

export default function BackgroundColorChanger({ backgroundColorValue }) {

    // const handleBackgroundColorChange = () => { document.body.style.backgroundColor = backgroundColorValue };
    function handleBackgroundColorChange() {
        // let element = document.getElementById("nose");
        let element = document.body;
        element.classList.toggle("dusk");
    }
    return (
        <div>
            <button onClick={() => handleBackgroundColorChange()}>Click me to Change to Dusk Color</button>
        </div>
    )
}
