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
                    Happy happy happy birthday to my amazing mama! <br />
                    <br />
                    You are and always have been the strongest, kindest, and most beautiful (inside and out) 
                    person I know. Ever since I was little I've wanted to be just like you mommy, and even now when
                    people tell me I remind them of you, it's the best compliment I could get. You have made me and
                    Misiu who we are today, and I couldn't have asked for a better mom. <br />
                    Thank you for all the lessons you taught me, especially the hard ones I didn't want to hear, 
                    thank you for all the times you've made me laugh, thank you for all the advice you've given me, 
                    thank you for all the memories we've made, thank you for all the thoughtful gifts you've give me, 
                    thank you for all the times you've listened to me, thank you for all the times you've taken care 
                    of me when I was sick, thank you for all the times you've cheered me up when I was sad, thank you 
                    for all the times you didn't let me quit, thank you for every time you encourage me and lifted me up, 
                    and most of all, thank you for all the sacrifices you've made for me. <br />
                    <br />
                    As much as I love to talk, I could never find the words to express how much you mean to me and how you've
                    shaped my life. I wouldn't be here without you mamusia, all my happiness and all my successes are thanks
                    to you. You will forever be my role model and my favorite person, and I love you more than life.<br />
                    <br />
                    You deserve the whole world and more mamusia.
                    (I can't give you that, but I thought you might like this website for now!) <br />
                    <br />
                    Z Miłością, Sarcia <br />
                    <br />
                    P.S Kocham cię bardzo bardzo bardzo mamusia!!!
                </p>
            </div>
        </div>
    );
} 

export default Home;