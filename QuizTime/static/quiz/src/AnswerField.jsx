import React, { useState } from "react";

function AnswerField(props) {

    const [elementColor, setElementColor] = useState();

    function handleOnMouseOver(event) {
        setElementColor(event.target.style.backgroundColor = "rgb(40, 40, 185)");
    }

    function handleMouseOut(event) {
        setElementColor(event.target.style.backgroundColor = "rgb(71, 71, 137)")
    }

    return (
        <div className="btn-container">
            {props.possibleAnswers.map((answer, index) => (
                <div
                    key={index}
                    className="btn blue-box"
                    type="button"
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{ backgroundColor: { elementColor } }}
                >{answer}</div>
            ))}
        </div>
    )
}

export default AnswerField;