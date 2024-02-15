import React, { useState, useEffect } from "react";
import "./hero.css"; // Ensure your CSS has the necessary styling for the background
import SplitText from "gsap-trial/SplitText";
import gsap from "gsap";

function Hero() {
    const [mousePosition, setMousePosition] = useState({
        x: -10000,
        y: -10000,
    });

    // Function to update the mouse position
    const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.pageX, y: ev.pageY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        // Initialize SplitText and animation for the h1 element
        const splitH1 = new SplitText("#splith1", { type: "words, chars" });
        gsap.from(splitH1.chars, {
            duration: 0.5,
            opacity: 0,
            scale: "15",
            x: () => 50 - Math.random() * 100,
            y: () => 25 - Math.random() * 50,
            rotation: () => -90 + Math.random() * 180,
            ease: "ease-in",
            stagger: {
                each: 0.03,
                from: "center",
            },
        });

        // Initialize SplitText and animation for the h3 element
        // Ensure you give your h3 element a unique ID or class for targeting
        const splitH3 = new SplitText("#splith3", { type: "chars" }); // Assuming 'h3' is unique; otherwise, use a class or ID.
        gsap.from(splitH3.chars, {
            duration: 0.5,
            opacity: 0,
            delay: 2,
            ease: "power1.inOut",
            stagger: {
                each: 0.05, // Adjust time between each word appearing
                from: "start", // Animation will start from the left
            },
        });

gsap.from("#splitButton", {
    duration: 3.5,
    scale:100,

    y: -500,
    ease: "back.out(1.7)",
});

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            // Clean up resources for both SplitText instances
            splitH1.revert();
            splitH3.revert();

        };
    }, []); // Empty dependency array ensures this effect only runs once on mount

    // Dynamic style for the mask effect
    const maskStyle = {
        width: "100%",
        height: "100%",
        position: "absolute",
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, transparent 100px, rgba(0, 0, 0, 0.95) 300px)`,
        pointerEvents: "none",
    };

    return (
        <div className="min-h-screen heroBg md:max-w-[100%] mx-auto max-w-full align-middle flex items-center justify-center ">
            <div style={maskStyle} />
            <div
                className="content text-center  "
                style={{ position: "relative", zIndex: 2 }}
            >
                <h1 id="splith1" className="text-white">
                    Innovate Your Brand: Elevate Your Marketing Game
                </h1>
                <h3 id="splith3" className="mb-24 mt-10">
                    Unleash the Power of Strategic Marketing Solutions for
                    Growth and Success
                </h3>
                <button id="splitButton" className="buttonVariation1">
                    Purchase Now
                </button>
            </div>
        </div>
    );
}

export default Hero;
