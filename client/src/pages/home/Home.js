import React, { useState, useEffect } from "react";
import Hero from "./components/story/Story";
import Testimonials from "./components/testimonials/Testimonials";
import Smoother from "./components/smoother/Smoother";
import Opening from "./components/opening/Opening";
import ProgressStart from "./components/progressStart/ProgressStart";

import gsap from "gsap";
function Home({ data, pageName, setPageName }) {
    const handleLetsGo = () => {
        setPageName("story");
    };
    const handleNormal = () => {
        setPageName("normal");
    };
    useEffect(() => {
        if (pageName === "normal") {
            gsap.from("#normal-page", {
                x: "100%", // Start sliding in from 100% off the right side
                opacity: 0,

                yoyo: true, // Go back and forth for the shake effect

                duration: 4, // Duration for the slide-in animation
                ease: "power3.out", // Use an ease for a smoother slide-in
            });
        }
    }, [pageName]);

    return (
        <div className="   max-w-full  w-full mx-auto  ">
            {pageName === "progress" && (
                <div className="">
                    <ProgressStart setPageName={setPageName} />
                </div>
            )}
            {pageName === "opening" && (
                <div className="">
                    <Opening handleLetsGo={handleLetsGo} />
                </div>
            )}
            {pageName === "story" && (
                <div className="">
                    <Hero handleNormal={handleNormal} />
                </div>
            )}
            {pageName === "normal" && (
                <div className="" id="normal-page">
                    <Smoother />
                </div>
            )}

            {/* <div className="">
                <Testimonials data={data.testimonials} />
            </div> */}
        </div>
    );
}

export default Home;
