import React, { useState, useEffect } from "react";
import Hero from "./components/story/Story";
import HeavenScroll from "react-heaven-scroll";
import Testimonials from "./components/testimonials/Testimonials";
import Smoother from "./components/smoother/Smoother";
import Opening from "./components/opening/Opening";
import ProgressStart from "./components/progressStart/ProgressStart";
import LoadingBar from "react-top-loading-bar";
import gsap from "gsap";
import Lore from "./components/lore/Lore";
import Team from "./components/team/Team";
function Home({ data, pageName, setPageName }) {
    const [topLoadingProgress, setTopLoadingProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            // Calculate the current scroll progress
            const totalScroll =
                document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrollProgress = (currentScroll / totalScroll) * 100;

            // Update the loading bar's progress
            setTopLoadingProgress(scrollProgress);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty dependency array means this effect runs once on mount

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

                duration: 2, // Duration for the slide-in animation
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
                <HeavenScroll velocity={0.02}>
                    <div className="linearBg ">
                        <div className="absolute top-0">
                            {" "}
                            <LoadingBar
                                progress={topLoadingProgress}
                                color="#0626c6"
                            />
                        </div>

                        <div className="" id="normal-page">
                            <Smoother />
                        </div>
                        <div className="" id="normal-page">
                            <Lore />
                        </div>
                        <div className="" id="normal-page">
                            <Team data={data} />
                        </div>
                    </div>
                </HeavenScroll>
            )}

            {/* <div className="">
                <Testimonials data={data.testimonials} />
            </div> */}
        </div>
    );
}

export default Home;
