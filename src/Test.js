import "./Test.css"
import React, { useState} from 'react'

function Test() {

    const questions  = [
        {
            questionText: "2 + 2 = ?",
            answerOptions: "4"
        },

        {
            questionText: "22 / 11 = ?",
            answerOptions: "2"
        },

        {
            questionText: "5 x 5 = ?",
            answerOptions: "25"
        },
	]
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    return (
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{/* {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button>{answerOption.answerText}</button>
						))} */}
							<input type="text" placeholder="Enter your answer here!"></input>
							<button onClick={() => { setCurrentQuestion(currentQuestion+1)}}>Next</button>
					</div>
				</>
			)}
		</div>
    )
}

export default Test
