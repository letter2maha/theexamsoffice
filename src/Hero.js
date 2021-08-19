import React from 'react'

function Hero(props) {
    return (
        <section className="hero">
            <nav>
                <img src="examoffice.png"></img>
                <h2>Welcome {props.email}</h2>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero
