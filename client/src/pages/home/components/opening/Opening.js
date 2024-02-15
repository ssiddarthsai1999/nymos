import React, { useState, useEffect } from "react";

import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

function Opening({ handleLetsGo }) {
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

            ease: "ease-in",
            stagger: {
                each: 0.1,
                from: "random",
            },
        });

        // Initialize SplitText and animation for the h3 element
        // Ensure you give your h3 element a unique ID or class for targeting
        const splitH3 = new SplitText("#splith3", { type: "chars" }); // Assuming 'h3' is unique; otherwise, use a class or ID.
        gsap.from(splitH3.chars, {
            duration: 0.5,
            opacity: 0,
            delay: 1.5,
            ease: "power1.inOut",
            stagger: {
                each: 0.08, // Adjust time between each word appearing
                from: "end", // Animation will start from the left
            },
        });

        gsap.from("#splitButton", {
            duration: 3.5,
            scale: 100,
            delay: 2,
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
        <div className="min-h-screen bg-black  md:max-w-[100%] mx-auto max-w-full align-middle flex items-center justify-center ">
            <div />
            <div
                className="content text-center  "
                style={{ position: "relative", zIndex: 2 }}
            >
                <h1 className="text-white" id="splith1">
                    Time has come
                </h1>
                <h3 className="mb-24 mt-10" id="splith3">
                    For fate to choose
                </h3>

                <i
                    id="splitButton"
                    className="fa-solid fa-arrow-right fa-bounce fa-2xl"
                    onClick={handleLetsGo}
                ></i>
            </div>
        </div>
    );
}

export default Opening;
