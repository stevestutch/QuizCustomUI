import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import AnswerField from './AnswerField';
import QuestionField from './QuestionField';
import questions from './Questions';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    useEffect(() => {
        if (data) {
            askQuestion();
        }
    }, [data]);

    const [question, setQuestion] = useState([]);

    function askQuestion() {
        let randomNumber = Math.floor(Math.random() * questions.length);
        setQuestion(questions[randomNumber])
    }

    return (
        <div>
            {data ? data : 'Loading...'}
            <QuestionField question={question.question} />
            <AnswerField />
        </div>
    );
}

export default App;
