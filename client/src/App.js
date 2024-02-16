import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { scroll } from "framer-motion/dom";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import HeavenScroll from "react-heaven-scroll";
import NotFound from "./pages/shared/notfound/NotFound";
import {
    Navigate,
    Route,
    Routes,
    BrowserRouter as Router,
    Outlet,
    Link,
    useNavigate,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Home from "./pages/home/Home";
import Navbar from "./pages/shared/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/slices/themeSlice";
import Footer from "./pages/shared/footer/Footer";
import data from "../src/data.json";
import Navbars from "./pages/shared/navbar/Navbars";
function App() {
    const dispatch = useDispatch();
    const { mode } = useSelector((state) => state.theme);
    const profile = JSON.parse(localStorage.getItem("profile"));
    const [pageName, setPageName] = useState(
        "progress",
        "opening",
        "story",
        "normal" || "progress"
    );
    const handleSubscribe = async () => {
        Navigate("/#footer");
    };
    useEffect(() => {
        // When app loads, check if a theme mode is saved in localStorage
        const savedMode = localStorage.getItem("themeMode");
        if (savedMode) {
            // If found, dispatch an action to set the mode
            dispatch(toggleTheme(savedMode));
        }
    }, [dispatch]);
    useEffect(() => {
        // Save the mode to localStorage whenever it changes
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 1000, // Customize based on your preference
            effects: true,
            smoothTouch: 20.01,
        });

        return () => smoother.kill(); // Clean up
    }, []);

    console.log("data", data);
    gsap.registerPlugin(
        ScrollTrigger,
        ScrollToPlugin,
        ScrollSmoother,
        SplitText,
        useGSAP
    );

    // create the smooth scroller FIRST!

    return (
        <div className={`${mode === "dark" ? "dark-mode" : "light-mode"}`}>
            <AnimatedCursor
                innerSize={9}
                outerSize={10}
                color="0, 82, 255"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    "a",
                    "i",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                    {
                        target: ".custom",
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: "255, 255, 255",
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5,
                        },
                    },
                ]}
            />{" "}
            <HeavenScroll velocity={0.02}>
                <ToastContainer />
                <Router>
                    <Routes>
                        {/*Standard......................*/}
                        <Route
                            element={
                                <div className="scroll-smooth antialiased flex flex-col min-h-screen">
                                    {pageName === "normal" && (
                                        <div className="w-full md:fixed top-0 z-40">
                                            <Navbar
                                                handleSubscribe={
                                                    handleSubscribe
                                                }
                                            />
                                        </div>
                                    )}
                                    <Outlet />
                                    <div className="flex-grow"></div>
                                    {/* <div
                                    className="pt-[80px] md:pt-[150px] bottom-0"
                                    id="footer"
                                >
                                    <Footer />
                                </div> */}
                                </div>
                            }
                        >
                            {/*Auth......................*/}
                            <Route
                                element={
                                    <Home
                                        data={data}
                                        setPageName={setPageName}
                                        pageName={pageName}
                                    />
                                }
                                path="/"
                            />

                            {/* <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route
                            path="/verifyEmail/:token"
                            element={<VerifyEmail />}
                        /> */}

                            {/* <Route
                            path="/reset-password/:resetToken"
                            element={<ResetPassword />}
                        /> */}
                            {/*Posts......................*/}
                            {/* <Route
                            element={<AllPosts />}
                            path="/projects/allposts"
                        /> */}

                            {/*Analysis and tldr......................*/}
                            {/* <Route element={<Analysis />} path="/deck" />
                        <Route element={<Tldr />} path="/tldr" /> */}
                            {/*Profile......................*/}
                            {/* <Route
                            element={<AuthUserRoute element={<Profile />} />}
                            path="/profile"
                        /> */}
                        </Route>

                        {/*Admin route......................*/}
                        {/* <Route
                        element={
                            <div className="scroll-smooth antialiased flex  ">
                                {" "}
                                <div className="  md:sticky left-0 w-fit  ">
                                    <SideNavbar />
                                </div>
                                <div className="adminBg w-full mx-auto">
                                    {" "}
                                    <Outlet />
                                </div>
                            </div>
                        }
                    >
                        <Route
                            element={<AdminRoute element={<AllPostss />} />}
                            path="/admin/posts"
                        />
                        <Route
                            element={<AdminRoute element={<CreatePost />} />}
                            path="/admin/createpost"
                        />
                        <Route
                            element={<AdminRoute element={<EditPost />} />}
                            path="/admin/editpost/:id"
                        />
                        <Route
                            element={<AdminRoute element={<Subscribers />} />}
                            path="/admin/subscribers"
                        />
                    </Route> */}

                        {/*Error 404 not found......................*/}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>{" "}
            </HeavenScroll>
        </div>
    );
}

export default App;
