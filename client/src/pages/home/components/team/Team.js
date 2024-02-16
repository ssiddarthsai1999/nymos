import React, { useEffect } from "react";
import TeamCard from "./teamCard/TeamCard";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
function Team({ data }) {
    console.log("team", data);
    return (
        <div className=" min-h-screen w-full  pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex align-middle items-center max-w-[2000px] mx-auto max-h-[2000px]">
            <Bounce >
                <h1 className="text-center lg:mb-2 mb-10 text-[1.5em] sm:text-[2em]  md:text-[2.5em] lg:text-[3em] xl:text[4em]">
                    MEET THE TEAM
                </h1>
            </Bounce>
            <Fade delay={100} duration={2000}>
                <div className="mx-auto justify-center flex flex-wrap gap-10 pt-[50px] md:pt-[100px]">
                    {data.team.map((item) => (
                        <TeamCard item={item} />
                    ))}
                </div>
            </Fade>
        </div>
    );
}

export default Team;
