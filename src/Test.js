import "./Test.css"
import React, { useState} from 'react'

function Test(props) {

    const questions  = [
        {
            questionText: "? = 6000 + 90 ",
            answerOptions: "6090"
        },

        {
            questionText: "? = 8275 + 82",
            answerOptions: "8375"
        },

        {
            questionText: "826 = 800 + ? + 6",
            answerOptions: "20"
		},
		{
            questionText: "?  + 5 = 341 ",
            answerOptions: "336"
		},
		
		{
            questionText: "9 × 41 = ? ",
          	  answerOptions: "369"
		},
		

		{
            questionText: "5.87 + 3.123 = ? ",
          	  answerOptions: "8.993"
		},

		{
            questionText: "180 ÷ 3 = ? ",
          	  answerOptions: "60"
		},

		{
            questionText: "120 ÷ 12 = ? ",
          	  answerOptions: "10"
		},

		{
            questionText: "213 × 0 = ? ",
          	  answerOptions: "0"
		},

		{
            questionText: "91 ÷ 7 = ? ",
          	  answerOptions: "13"
		},

	]
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState('');
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleNext = () => {

		console.log(currentAnswer + "----currentAnswer");
		console.log(questions[currentQuestion].answerOptions + "----Answer");
		
		if (currentAnswer == questions[currentQuestion].answerOptions) {
			setScore(score +1);
		}
		setCurrentAnswer('')

		const nextQuestion = currentQuestion + 1;
		console.log(score + "--------score---");
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	const handleViewTest = () => {
		props.setFinalScore(score);
		props.setHasTakenTest(true);
		props.setTestStart(!props.isTestStart);
	}
    return (
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					{score > 5 ? <h1>Congratulations</h1>: null}
					You scored {score} out of {questions.length}
					<button onClick={ handleViewTest}> View Tests</button>
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
							<input type="text" placeholder="Enter your answer here!" value={currentAnswer}
								onChange={(e) => { setCurrentAnswer(e.target.value) }}></input>
							<button onClick={handleNext}>Next</button>
							<p> {questions[currentQuestion].answerOptions}</p>
					</div>
				</>
			)}
		</div>
    )
}

export default Test
