import React, { useState } from 'react';

const QUESTIONS = [
  {
    question: "Which CSS selector has the highest specificity?",
    options: [
      ".btn",
      "#header",
      "div p",
      "*"
    ],
    answer: "#header"
  },
  {
    question: "What does the defer attribute on a <script> tag do?",
    options: [
      "Delays execution until after HTML parsing is complete",
      "Executes the script as soon as it is downloaded",
      "Preloads the script without executing it",
      "Prevents the script from being cached"
    ],
    answer: "Delays execution until after HTML parsing is complete"
  },
  {
    question: "Which JavaScript event fires when the DOM has fully loaded, but before images and stylesheets are loaded?",
    options: [
      "load",
      "DOMContentLoaded",
      "readystatechange",
      "beforeunload"
    ],
    answer: "DOMContentLoaded"
  },
  {
    question: "What does box-sizing: border-box; do in CSS?",
    options: [
      "Includes padding and border in the element’s total width and height",
      "Excludes padding but includes border in the element’s total size",
      "Makes the element’s box model behave like Internet Explorer 5",
      "Forces the element to ignore margin collapsing"
    ],
    answer: "Includes padding and border in the element’s total width and height"
  },
  {
    question: "What does ARIA stand for in web accessibility?",
    options: [
      "Accessible Rich Internet Applications",
      "Advanced Rendering in Apps",
      "Asynchronous Resource Integration",
      "Automated Responsive Interface Approach"
    ],
    answer: "Accessible Rich Internet Applications"
  }
]


const Puzzle11 = () => {

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(QUESTIONS[0].options[0]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const nextQuestion = () => {
    // compare answers and update score
    if (selectedAnswer === QUESTIONS[currentQuestionIdx].answer) {
      setScore(prev => prev + 1);
    }
    // increment question idx
    setCurrentQuestionIdx(prev => {
      if (prev + 1 === QUESTIONS.length) {
        setSubmitted(true);
        return 0;
      }
      setSelectedAnswer(QUESTIONS[prev + 1].options[0])
      return prev + 1;
    });
  }

  const retry = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(QUESTIONS[0].options[0]);
    setScore(0);
    setSubmitted(false);
  }

  return (
    <div>
      { submitted? (
        <div>
          <p>Score: {score}/{QUESTIONS.length}</p>
          <button onClick={retry}>Retry</button>
        </div>
      ) : (
        <div>
          <h3>{QUESTIONS[currentQuestionIdx].question}</h3>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {QUESTIONS[currentQuestionIdx].options.map((option, idx) => (
              <li key={idx}>
                <input type='radio' value={option} checked={selectedAnswer === option} onChange={() => setSelectedAnswer(option)}/>
                <label>{option}</label>
              </li>
            ))}
          </ul>
          <button onClick={nextQuestion}>{currentQuestionIdx === QUESTIONS.length - 1? 'Submit' : 'Next'}</button>
        </div>
      )}

    </div>
  );
};

export default Puzzle11;
