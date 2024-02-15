import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import bgmoon from "../../../../assets/images/city.gif";

function Smoother() {
    const sceneRef = useRef(null);
    const imgRef = useRef(null); // Reference for the image you want to rotate

    useEffect(() => {
        // Initialize parallax
        if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current);
            return () => parallaxInstance.destroy();
        }
    }, []);

    useEffect(() => {
        // Rotate image based on mouse movement
        const handleMouseMove = (event) => {
            const { pageX, pageY } = event;
            const rotateX = (pageY / window.innerHeight - 0.5) * 10; // Adjust rotation sensitivity here
            const rotateY = (pageX / window.innerWidth - 0.5) * 10; // Adjust rotation sensitivity here

            if (imgRef.current) {
                imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            id="scene"
            ref={sceneRef}
            className="text-center  flex justify-center items-center align-middle h-screen"
        >
            <div>
                <h1 className="">Saga studio</h1>
            </div>
            <div data-depth="0.1" className="layer overflow-hidden h-screen ">
                <img
                    ref={imgRef} // Assign ref to the image
                    src={bgmoon}
                    alt=""
                    className="h-screen object-cover w-full  opacity-15"
                />
            </div>
        </div>
    );
}

export default Smoother;
