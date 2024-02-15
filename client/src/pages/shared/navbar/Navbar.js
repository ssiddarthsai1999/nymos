import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/slices/themeSlice";
import logo from "../../../assets/images/google-logo.jpg";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mode } = useSelector((state) => state.theme);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleDarkOrLight = () => {
        dispatch(toggleTheme());
    };

    return (
        <div
            className={`w-full items-center align-middle p-4 ${
                mode === "dark" ? "bg-transparent" : "bg-transparent"
            }`}
        >
            <div className="flex justify-between items-center  md:px-24 px-6">
                <Link
                    to="/"
                    className="items-center justify-center align-middle"
                >
                    <div className="flex cursor-pointer ">
                        <h1 className="text-lg">Nymos</h1>
                    </div>
                </Link>

                <div className="flex justify-center flex-grow items-center">
                    <ul
                        className={`hidden lg:flex  font-bold text-[18px]  gap-[40px] text-[#444444] ${
                            isMenuOpen ? "hidden" : ""
                        }`}
                    >
                        <Link to="/">
                            <li className="text-[#444444] duration-300 ease-in border-transparent hover:border-[#444444] px-3 py-2 rounded-[4px] hover:bg-white hover:text-black">
                                Home
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className="text-[#444444] duration-300 ease-in border-transparent hover:border-[#444444] px-3 py-2 rounded-[4px] hover:bg-white hover:text-black">
                                Upgrade
                            </li>
                        </Link>
                        <Link to="/" onClick={closeMenu}>
                            <li className=" text-[#444444] duration-300 ease-in border-transparent hover:border-[#444444] px-3 py-2 rounded-[4px] hover:bg-white hover:text-black">
                                Stake
                            </li>
                        </Link>
                        <Link to="/about" onClick={closeMenu}>
                            <li className=" text-[#444444] duration-300 ease-in border-transparent hover:border-[#444444] px-3 py-2 rounded-[4px] hover:bg-white hover:text-black">
                                {" "}
                                Collection
                            </li>
                        </Link>{" "}
                        <Link to="/" onClick={closeMenu}>
                            <li className="text-[#444444] duration-300 ease-in border-transparent hover:border-[#444444] px-3 py-2 rounded-[4px] hover:bg-white hover:text-black">
                                Merch
                            </li>
                        </Link>
                        <Link to="/about" onClick={closeMenu}>
                            <li className="text-[#444444] duration-300 ease-in border-transparent hover:border-[#444444] px-3 py-2 rounded-[4px] hover:bg-white hover:text-black">
                                Brand
                            </li>
                        </Link>
                    </ul>

                    {/* {isLargeScreen && (
                        <Link
                            to="/special"
                            className="hidden lg:flex items-center justify-center bg-blue-200"
                        >
                            <div className="flex cursor-pointer">
                                <h3>Special Link</h3>
                            </div>
                        </Link>
                    )} */}
                </div>

                <div className="lg:hidden">
                    <i
                        className="fa-solid fa-bars cursor-pointer"
                        onClick={handleMenuOpen}
                    ></i>
                    {isMenuOpen && (
                        <div className="fixed top-0 inset-x-0 bg-black min-h-screen shadow-2xl p-2">
                            <i
                                className="fa-solid fa-xmark cursor-pointer justify-end flex"
                                onClick={closeMenu}
                            ></i>
                            <ul className="flex flex-col gap-4 font-bold text-[14px] mt-2 text-[#444444]">
                                <Link to="/" onClick={closeMenu}>
                                    <li>Home</li>
                                </Link>
                                <Link to="/about" onClick={closeMenu}>
                                    <li>Upgrade</li>
                                </Link>
                                <Link to="/" onClick={closeMenu}>
                                    <li>Stake</li>
                                </Link>
                                <Link to="/about" onClick={closeMenu}>
                                    <li>Collection</li>
                                </Link>
                                <Link to="/" onClick={closeMenu}>
                                    <li>Merch</li>
                                </Link>
                                <Link to="/about" onClick={closeMenu}>
                                    <li>Brand</li>
                                </Link>
                                {/* More links */}
                            </ul>
                        </div>
                    )}
                </div>

                {/* This div acts as a spacer/placeholder to balance the flex space on the right side. */}
                <div
                    className={`${
                        isMenuOpen || !isLargeScreen ? "hidden" : "invisible"
                    } lg:flex w-10`}
                ></div>
            </div>
        </div>
    );
}

export default Navbar;
