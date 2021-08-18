import "./Tests.css"
import Test from "./Test"
import React, { useState}from 'react'

function Tests() {
    const [isTestStart, setTestStart] = useState(false)
    return (

        (!isTestStart)?
        <div className="testsContainer">
            <h1 className= "testName" > Mathematics Quiz </h1>
                <button className="testButton" onClick={()=> setTestStart(!isTestStart)}> Take Test</button>
        </div>: <Test/>
    )
}

export default Tests
