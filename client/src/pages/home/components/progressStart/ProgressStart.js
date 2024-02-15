import React, { useEffect, useState } from "react";
import { CircularProgress, LinearProgress } from "@mui/material/";

import SplitText from "gsap-trial/SplitText";
import gsap from "gsap";
function ProgressStart({ setPageName }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 3000; // 3 seconds for the count-up animation
        const intervalDuration = 30;
        const increment = (100 * intervalDuration) / duration;

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress + increment;
                if (nextProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return nextProgress;
            });
        }, intervalDuration);

        // Set timeout to change page name after 3 seconds
        const timeout = setTimeout(() => {
            setPageName("opening");
        }, duration);

        // Clean up the interval and timeout on component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [setPageName]);
    return (
        <div className="min-h-screen bg-black  md:max-w-[100%] mx-auto max-w-full align-middle flex items-center justify-center ">
            <div />
            <div
                className="content text-center  "
                style={{ position: "relative", zIndex: 2 }}
            >
                <h1 className="text-white" id="splith1">
                    Loading!
                </h1>
                <div>
                    {" "}
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                </div>
                <p> {progress.toFixed(0)}%</p>
            </div>
        </div>
    );
}

export default ProgressStart;
