import React from "react";

function QuestionField(props) {
    return (
        <div className="question-container">
            {props.question}
        </div>
    )
}

export default QuestionField;