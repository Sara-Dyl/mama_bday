import React, { useState, useEffect } from 'react';

import './Home.css'

const Home = () => {
    // State to manage the header text
    const [headerText, setHeaderText] = useState('Happy birthday Mama!');

    // Function to toggle the header text
    const toggleHeaderText = () => {
        if (headerText === 'Happy birthday Mama!') {
            setHeaderText('Wszystkiego najlepszego Mamusia!');
        } else {
            setHeaderText('Happy birthday Mama!');
        }
    };

    return (
        <div className="home-page">
            <h1>{headerText}</h1>
            <button className="change-lang" onClick={toggleHeaderText}>Try me!</button>
            <div className="textbox">
                <p className="note">
                    Happy happy happy birthday to my amazing mama!
                    You are and always have been the strongest, kindest, and most beautiful (inside and out) 
                    person I know. 
                </p>
            </div>
        </div>
    );
} 

export default Home;