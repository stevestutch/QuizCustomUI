import React from "react";

function QuestionField(props) {
    return (
        <div className="question-container">
            <h1>{props.question}</h1>
        </div>
    )
}

export default QuestionField;