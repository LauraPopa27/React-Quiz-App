import React, {useState} from 'react';
import './App.css';

export default function App() {

  const questions= [
   { questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
    },

		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following animals can run the fastest?',
			answerOptions: [
				{ answerText: 'Leopard', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
        { answerText: 'Cheetah', isCorrect: true },
			],
		},

    {
      questionText: 'The human body is made up of approximately how much water?',
      answerOptions: [
        {answerText: '40%', isCorrect: false},
        {answerText: '50%', isCorrect: false},
        {answerText: '60%', isCorrect: false},
        {answerText: '70%', isCorrect: true},
      ]

    },
	];

  const [currentQuestion, setCurrentQuestion]= useState(0);
  const [showScore, setShowScore]= useState(false);
  const [score, setScore]= useState(0);

  const answerButtonClick = (isCorrect) =>{

    if(isCorrect=== true)
    {
      setScore(score + 1);
    }

    const nextQuestion= currentQuestion + 1;
    if(nextQuestion < questions.length)
    {
      setCurrentQuestion(nextQuestion);
    }
    else
    {
      setShowScore(true);
    }
    
  }
  

  return (
    <div className='app'>
    {}
    {showScore ? (
      <div className='score-section'>You scored {score} out of {questions.length}.</div>
      
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion +1}</span>/{questions.length}
          </div>
          <div className='question-text'>
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption) => <button onClick={()=> answerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
        </div>
      </>
    )}
  </div>
);
  
}


