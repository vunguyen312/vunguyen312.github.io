import React, {useEffect, useState} from "react";

function SetTitle(){
    const defaultText = 'Vu Nguyen';
    const newText = 'Software Developer';
    const [text, setText] = useState(defaultText);
    const [isAnimating, setIsAnimating] = useState(false);
    const [blink, setBlink] = useState("_");

    function BlinkUnderscore(){
    
        useEffect(() => {
            const interval = setInterval(() => {
            const newState = blink === "_" ? "" : "_";
            setBlink(newState);
            }, 500);
            return () => clearInterval(interval);
        });
    
        return(blink);
    }

    const typeName = () => {

        if(isAnimating) return;

        let counter = 0;

        setIsAnimating(true);
        setBlink("|");

        const interval = setInterval(() => {

            setText(defaultText.substring(0, counter));

            if(counter < defaultText.length) return counter++;

            clearInterval(interval);
            setIsAnimating(false);

        }, 70);
    }

    const resetText = (str) => {
        
        if(isAnimating) return;

        let counter = str.length;

        setIsAnimating(true);
        setBlink("|");

        const interval = setInterval(() => {

            setText(str.substring(0, counter));

            if(counter > 0) return counter--;

            clearInterval(interval);
            setIsAnimating(false);
            if(str === newText) return typeName();
            typeTitle();

        }, 40);
    }

    const typeTitle = () => {
        
        if(isAnimating || text === newText) return;
        
        let counter = 1;

        setIsAnimating(true);
        setBlink("|");

        const interval = setInterval(() => {

            setText(newText.substring(0, counter));

            if(counter < newText.length) return counter++;

            clearInterval(interval);
            setTimeout(() => {
                setIsAnimating(false); 
                resetText(newText);
            }, 3000);

        }, 50);
    }
    
    const animationPlayState = text === newText ? 'paused' : 'initial';

    return(
        <span style={{animationPlayState: animationPlayState}} className="json" 
        onMouseEnter={() => resetText(defaultText)}
        >
            {text}<BlinkUnderscore />
        </span>
    );
}

export default SetTitle;