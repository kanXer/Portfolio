"use client";
import React, { useState, useEffect } from 'react';

export default function App() {
    // State variables to hold text content
    const [mainText, setMainText] = useState("Welcome To");
    const [spanText, setSpanText] = useState("My Website");

    // Function to change the text content
    const changeText = () => {
        // Toggle between different texts
        setMainText(mainText === "Welcome To" ? "My Name is " : "Welcome To");
        setSpanText(spanText === "My Website" ? "Sahil Srivastava" : "My Website");

        // Call the function again after 500 milliseconds
        setTimeout(changeText, 30000);
    };
    
    // useEffect to start the text change loop on component mount
    useEffect(() => {
        // Start the text change loop

        changeText();

        // Cleanup function (not really needed here since we're not clearing any interval)
        // return () => {};
    }, []); // Empty dependency array to run effect only once on component mount

    return(
        <div>
            <div className="container flex items-center justify-around abouttext ">
                <p className="poppins-semibold ">{mainText} <span className="col-blue">{spanText}</span></p>
            </div>
        </div>
    );
    
}
