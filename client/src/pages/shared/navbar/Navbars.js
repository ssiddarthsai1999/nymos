import React, { useState } from "react";
import { motion } from "framer-motion";
function Navbars() {
    const [isOpen, setIsOpen] = useState(true);
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    return (
        <div className="z-50">
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <i
                    className="fa-solid fa-bars cursor-pointer  text-white"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                ></i>
                <div>
                    <h1>hey</h1>
                    <h1>hey</h1>
                    <h1>hey</h1>
                </div>
            </motion.nav>
        </div>
    );
}

export default Navbars;
