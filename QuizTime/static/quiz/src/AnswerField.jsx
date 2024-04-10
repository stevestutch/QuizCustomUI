import React, { useState } from "react";

function AnswerField(props) {

    const [elementColor, setElementColor] = useState();

    function handleOnMouseOver(event) {
        setElementColor(event.target.style.backgroundColor = "rgb(133, 184, 255)");
    }

    function handleMouseOut(event) {
        setElementColor(event.target.style.backgroundColor = "rgb(87, 157, 255)");
    }

    function handleOnClick(event) {
        let selectedAnswer = event.target.textContent;

        if (selectedAnswer === props.currentQuestionAnswer) {
            setElementColor(event.target.style.backgroundColor = "rgb(87, 157, 255)");
            props.countScoreUp();
            props.askQuestion();
        } else {
            setElementColor(event.target.style.backgroundColor = "rgb(87, 157, 255)");
            props.gameOver();
        }
    }

    return (
        <div className="btn-container">
            {props.possibleAnswers.map((answer, index) => (
                <div
                    key={index}
                    className="btn blue-box"
                    type="button"
                    onClick={handleOnClick}
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{ backgroundColor: { elementColor } }}
                >{answer}</div>
            ))}
        </div>
    )
}

export default AnswerField;