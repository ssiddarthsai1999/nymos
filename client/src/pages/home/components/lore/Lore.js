import React from "react";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
function Lore() {
    return (
        <div className="md:h-screen w-full lg:flex-row pt-[50px] lg:pt-[2px] p-4 lg:p-6 flex-col flex align-middle items-center max-w-[2000px] mx-auto max-h-[2000px]">
            <div className="min-w-[50%]">
                <Slide direction="right">
                    <h1 className="text-center lg:mb-2 mb-10 text-[1.5em] sm:text-[2em]  md:text-[2.5em] lg:text-[3em] xl:text[4em]">
                        PUDGY PENGUINS
                    </h1>
                </Slide>
            </div>
            <Slide direction="left">
                <div className="min-w-[50%] ">
                    <h2 className=" text-[1.25em] sm:text-[1.5em]  md:text-[1,8em] lg:text-[2em] xl:text[3em]">
                        WELCOME TO THE WORLD OF PUDGY PENGUINS. A WEB3-BORN
                        BRAND THAT FOSTERS CREATIVITY, FREEDOM, AND COMMUNITY.
                    </h2>
                    <h2 className=" text-[1.25em] sm:text-[1.5em]  md:text-[1,8em] lg:text-[2em] xl:text[3em]">
                        THE PUDGY PENGUINS BRAND PRODUCES CONTENT, MERCHANDISE,
                        TOYS, AND DIGITAL COLLECTABLES. WE BELIEVE IN THE POWER
                        OF PLAY AND IMAGINATION, AND WE'RE COMMITTED TO HELPING
                        YOU UNLOCK YOUR INNER CHILD.
                    </h2>
                    <h2 className=" text-[1.25em] sm:text-[1.5em]  md:text-[1,8em] lg:text-[2em] xl:text[3em]">
                        IT'S A VERY COLD PLACE BUT YOU'LL BE WARM WITH YOUR NEW
                        FAVORITE PENGUIN FAMILY!
                    </h2>
                </div>
            </Slide>
        </div>
    );
}

export default Lore;
