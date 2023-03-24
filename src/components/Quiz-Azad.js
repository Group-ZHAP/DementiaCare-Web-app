import React, { useState } from "react";

import Confetti from 'react-confetti'
import "./quiz.css";

function Quiz() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  

  const questions = [
    {
      text: "Do you have trouble remembering recent events?",
      options: [
        { id: 0, text: "Rarely ", isCorrect: true },
        { id: 1, text: "Sometimes ", isCorrect: false },
        { id: 2, text: "Often", isCorrect: false },
      ],
    },
    {
      text: "Do you have trouble finding the right word?",
      options: [
        { id: 1, text: "Sometimes ", isCorrect: false },
        { id: 2, text: "Often", isCorrect: false },
        { id: 0, text: "Rarely ", isCorrect: true },
      ],
    },
    {
      text: "Do you feel trouble remembering the day and date?",
      options: [
        { id: 2, text: "Often", isCorrect: false },
        { id: 0, text: "Rarely ", isCorrect: true },
        { id: 1, text: "Sometimes ", isCorrect: false },
       
      ],
    },
    {
      text: "Do you find it difficult to adjust the changes in your routine?",
      options: [
       
        { id: 1, text: "Sometimes ", isCorrect: false },
        { id: 2, text: "Often", isCorrect: false },
        { id: 0, text: "Rarely ", isCorrect: true },
      ],
    },
    {
      text: "Do you have trouble understanding written content or following a story on television?",
      options: [
        { id: 0, text: "Rarely ", isCorrect: true },
        { id: 2, text: "Often", isCorrect: false },
        { id: 1, text: "Sometimes ", isCorrect: false },
      ],
    },
    {
    text: "Do you find it hard to follow and join in conversations, particularly in groups?",
    options: [
      { id: 2, text: "Often", isCorrect: false },
      { id: 0, text: "Rarely ", isCorrect: true },
      { id: 1, text: "Sometimes ", isCorrect: false },
     
    ],
  },
  {
  text: "Do you have problems handling finances, such as banking or calculating change?",
  options: [
    { id: 0, text: "Rarely ", isCorrect: true },
    { id: 1, text: "Sometimes ", isCorrect: false },
    { id: 2, text: "Often", isCorrect: false },
  ],
},
{
text: "Do you have difficulty with everyday activities such as finding your way in the local shopping centre?",
options: [
  { id: 2, text: "Often", isCorrect: false },
  { id: 1, text: "Sometimes ", isCorrect: false },
  { id: 0, text: "Rarely ", isCorrect: true },
],
},
{
text: "Are you losing interest in activities you usually enjoy?",
options: [
  { id: 0, text: "Rarely ", isCorrect: true },
  { id: 1, text: "Sometimes ", isCorrect: false },
  { id: 2, text: "Often", isCorrect: false },
],
}, 
{
text: "Do you find difficulties thinking through problems",
options: [
  { id: 1, text: "Sometimes ", isCorrect: false },
  { id: 0, text: "Rarely ", isCorrect: true },
  { id: 2, text: "Often", isCorrect: false },
],
},
  ];

 
  const optionClicked = (isCorrect) => {
   
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <center>
    <div className="app">
      <div className="heading">
      <h1>Worried about your memory?</h1> 
      </div>

      <h2>Attempt the quiz below & know more about your health</h2>   

      <h2>Your Score Is: {score}</h2>
      {}
      {showResults ? (
     
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <Confetti/>
          <button className="button" onClick={() => restartGame()}>Restart quiz</button>
        </div>
      ) : (
    
        <div className="question-card">
          {}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {}
          <ul className="ul">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                className="li"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
                
              );
            })}
          </ul>
        </div>
      )}
    </div>
    </center>
  );
}

export default Quiz;
