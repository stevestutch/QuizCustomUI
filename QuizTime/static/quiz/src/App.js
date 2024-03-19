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

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    function countScoreUp() {
        setScore(score + 1);
    }

    function askQuestion() {
        let randomNumber = Math.floor(Math.random() * questions.length);
        setQuestion(questions[randomNumber])
    }

    function gameOver() {
        score > highscore ? setHighscore(score) : null;
        setScore(0);
        setGameOver(true);
    }

    return (
        <div>
            <div type="button" onClick={askQuestion} className="btn-start">Start Game</div>
            {question ? (
                <div>
                    {!isGameOver ? (
                        <div>
                            <h1>Score: {score}</h1>
                            <QuestionField question={question.question} />
                            <AnswerField possibleAnswers={question.answers}
                                currentQuestionAnswer={question.correctAnswer}
                                askQuestion={askQuestion}
                                countScoreUp={countScoreUp}
                                gameOver={gameOver} />
                        </div>
                    ) : (
                        <div>
                            <h1>Highscore: {highscore}</h1>
                            <button onClick={() => setGameOver(false)}>New Game</button>
                        </div>
                    )
                    }


                </div>
            ) : null}

        </div>
    );
}

export default App;
