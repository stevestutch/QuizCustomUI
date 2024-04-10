import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import AnswerField from './AnswerField';
import QuestionField from './QuestionField';
import questions from './Questions';

function App() {
    const [data, setData] = useState(null);
    const [question, setQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [isGameOver, setGameOver] = useState(false);
    const [highscore, setHighscore] = useState(0);
    const [hasGameStarted, setGameStarted] = useState(false);
    const [elementColor, setElementColor] = useState();

    useEffect(() => {
        invoke().then(setData);
    }, []);

    function countScoreUp() {
        setScore(score + 1);
    }

    function askQuestion() {
        if (questions.length < 1) {
            gameOver();
            return;
        }
        setGameStarted(true);
        let randomNumber = Math.floor(Math.random() * questions.length);
        setQuestion(questions[randomNumber]);
        questions.splice(randomNumber, 1);
    }

    function gameOver() {
        score > highscore ? setHighscore(score) : null;
        setScore(0);
        setGameOver(true);
    }

    function handleOnMouseOver(event) {
        setElementColor(event.target.style.backgroundColor = "rgb(133, 184, 255)");
    }

    function handleMouseOut(event) {
        setElementColor(event.target.style.backgroundColor = "rgb(87, 157, 255)");
    }

    return (
        <div>
            {!hasGameStarted &&
                (<div className='full-body'>
                    <div className='main-container'>
                        <div className='plain-view'>
                            <h1>Welcome to QuizTime!</h1>
                            <div
                                type="button"
                                onClick={askQuestion}
                                onMouseOver={handleOnMouseOver}
                                onMouseOut={handleMouseOut}
                                style={{ backgroundColor: { elementColor } }}
                                className="btn-slim blue-box">Start new Game
                            </div>
                        </div>
                    </div>
                </div>)}
            {question ? (
                <div>
                    {!isGameOver ? (
                        <div className='full-body'>
                            <div className='main-container'>
                                <div className='score-container'>Score: {score}</div>
                                <QuestionField question={question.question} />
                                <AnswerField possibleAnswers={question.answers}
                                    currentQuestionAnswer={question.correctAnswer}
                                    askQuestion={askQuestion}
                                    countScoreUp={countScoreUp}
                                    gameOver={gameOver} />
                            </div>
                        </div>
                    ) : (
                        <div className='full-body'>
                            <div className='main-container'>
                                <div className='plain-view'>
                                    <h1>Game Over</h1>
                                    <h2>Highscore: {highscore}</h2>
                                    <div
                                        type="button"
                                        className="btn-slim blue-box"
                                        onMouseOver={handleOnMouseOver}
                                        onMouseOut={handleMouseOut}
                                        style={{ backgroundColor: { elementColor } }}
                                        onClick={() => setGameOver(false)}>New Game</div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            ) : null}

        </div>
    );
}

export default App;
