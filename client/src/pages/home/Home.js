import React from "react";
import Hero from "./components/hero/Hero";
import Testimonials from "./components/testimonials/Testimonials";
import Smoother from "./components/smoother/Smoother";

function Home({ data }) {
    return (
        <div className="   max-w-full  w-full mx-auto  ">
            <div className="">
                <Hero />
            </div>
            <div className="">
                <Smoother />
            </div>{" "}
            <div className="">
                <Testimonials data={data.testimonials} />
            </div>
        </div>
    );
}

export default Home;
