import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import AnswerField from './AnswerField';
import QuestionField from './QuestionField';
import questions from './Questions';

function App() {
    const [data, setData] = useState(null);
    const [question, setQuestion] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    useEffect(() => {
        if (data) {
            askQuestion();
        }
    }, [data]);

    function countScoreUp() {
        setScore(score + 1);
    }

    function askQuestion() {
        let randomNumber = Math.floor(Math.random() * questions.length);
        setQuestion(questions[randomNumber])
    }

    function gameOver() {
        console.log("Game Over!");
        setScore(0);
    }

    return (
        <div>
            <h1>Score: {score}</h1>
            {question ? (
                <div>
                    <QuestionField question={question.question} />
                    <AnswerField possibleAnswers={question.answers}
                        currentQuestionAnswer={question.correctAnswer}
                        askQuestion={askQuestion}
                        countScoreUp={countScoreUp}
                        gameOver={gameOver} />
                </div>
            ) : null}

        </div>
    );
}

export default App;
