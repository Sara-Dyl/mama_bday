import React, { useState, useEffect } from 'react';

import './ShowLove.css'

const ShowLove = () => {

    const [messages, setMessages] = useState([]);

    const messagesList = [
        "I love you!",
        "Kocham cię!",
        "Kocham cię bardzo!!!",
        "Mwah mwah!",
        "Buziaki!",
        "Papużki nierozłãczki",
        "Mama is so beautiful!",
        "Happy birthday!!",
        "Wszystkiego najlepszego Mamusia!"
    ];

    const colors = ['#EE9880', '#F0C6C4', '#F0C45F', '#AECDD2', '#69A0A9'];

    const addMessage = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomMessage = messagesList[Math.floor(Math.random() * messagesList.length)];
        const newMessage = {
            id: Math.random(),
            text: randomMessage,
            color: randomColor,
            x: Math.random() * 100,
            y: Math.random() * 100
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="home-page">
            <button onClick={addMessage} className="love-button">Click Me</button>
            {messages.map(message => (
                <div key={message.id} className="message" style={{ left: `${message.x}%`, top: `${message.y}%`, color: message.color }}>
                    {message.text}
                </div>
            ))}
        </div>
    );
} 

export default ShowLove;