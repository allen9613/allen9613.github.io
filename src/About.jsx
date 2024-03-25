//contain a brief introduction of myself
// Path: src/About.jsx
//
import React from 'react'
import './About.css'
import img from '/S__16990243.jpg'

function About() {
    return (
        <div className="About">
            <h1>About</h1>
            <div className="About-container">
                <img className="About-image" src={img} alt="Personal" />
                <p className="About-text">
                    Name: 邱世綸<br />
                    Student ID: R12921A20<br />
                    This website is created for the course "Practicum of Attacking and Defense of Network Security"<br />
                </p>
            </div>
        </div>
    )
}

export default About



