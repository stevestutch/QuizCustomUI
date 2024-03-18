import React from "react";

function AnswerField() {
    return (
        <div className="btn-container">
            <h1>{text}</h1>
            <div className="btn red-box" type="button">Field 1</div>
            <div className="btn blue-box" type="button">Field 2</div>
            <div className="btn green-box" type="button">Field 3</div>
            <div className="btn yellow-box" type="button">Field 4</div>
        </div>
    )
}

export default AnswerField;