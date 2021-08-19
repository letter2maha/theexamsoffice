import "./Tests.css"
import Test from "./Test"
import React, { useState}from 'react'

function Tests() {
    const [isTestStart, setTestStart] = useState(false)
    const [finalScore, setFinalScore] = useState('');
    const [hasTakenTest, setHasTakenTest] = useState(false);
    return (

           (!isTestStart)?
        <>
            <div className="testsContainer">
                    <h1 className="testName" > Key stage 2 </h1>
                    
                    {(finalScore > 5) ? <button className="completeButton" > Completed</button> :
                        (hasTakenTest) ?
                            <>
                                <p className="prevScore">Your Previous Score: {finalScore }</p>
                                <button className="testButton" onClick={() => setTestStart(!isTestStart)}> Re-Take Test</button>
                            </>:
                        <button className="testButton" onClick={() => setTestStart(!isTestStart)}> Take Test</button>
                    }
                    
                </div>
                 <div className="testsContainer">
                <h1 className="testName" > Key stage 3 </h1>
                <button className="testButton" > Take Test</button>
            </div>
            
             <div className="testsContainer">
                <h1 className="testName" > Key stage 4 </h1>
                <button className="testButton" > Take Test</button>
            </div>
            
            <div className="testsContainer">
                <h1 className="testName" > Key stage 5 </h1>
                <button className="testButton" > Take Test</button>
             </div>
            </>
            : <Test isTestStart={isTestStart} setTestStart={setTestStart}
                    finalScore={finalScore} setFinalScore={setFinalScore}
                    hasTakenTest={hasTakenTest} setHasTakenTest={ setHasTakenTest}
                />
        
           
            
     
    )
}

export default Tests
