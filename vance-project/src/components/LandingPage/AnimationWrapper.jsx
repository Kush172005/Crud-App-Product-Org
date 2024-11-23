import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigator from "./Navigator";
import Page1 from "./AnimationPages/Page1";
import Page2 from "./AnimationPages/Page2";
import Page3 from "./AnimationPages/Page3";
import Page4 from "./AnimationPages/Page4";

gsap.registerPlugin(ScrollTrigger);

const pages = [Page1, Page2, Page3, Page4];

const AnimationWrapper = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const totalPages = pages.length;
        const pageElements = containerRef.current.children;

        gsap.to(pageElements, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "80%",
                scrub: 4,
                onUpdate: (self) => {
                    const currentPageIndex = Math.floor(
                        self.progress * totalPages
                    );
                    if (currentPageIndex !== currentPage) {
                        setCurrentPage(currentPageIndex);
                    }
                },
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [currentPage]);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                containerRef.current.style.height = `${
                    window.innerHeight * pages.length
                }px`;
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Navigator currentPage={currentPage} />
            <div
                ref={containerRef}
                className="relative w-full h-full overflow-y-scroll"
                style={{ height: "100vh" }}
            >
                <div className="h-full w-full">
                    {pages.map((Page, index) => (
                        <div
                            key={index}
                            className="w-full h-screen"
                            style={{
                                opacity: currentPage === index ? 5 : 0,
                                transition: "opacity 1s ease-out",
                            }}
                        >
                            <Page />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AnimationWrapper;
