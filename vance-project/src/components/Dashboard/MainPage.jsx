import React from "react";
import Megaphone from "../../assets/Icons/megaphone-icon.png";
import Login from "../Authentication/Login";

const MainPage = () => {
    return (
        <>
            <div className="bg-[#111] h-[100vh]">
                <div className="flex relative z-[1] flex-col items-center pt-[115px]">
                    <div className="background-effect" />
                    <img
                        src={Megaphone}
                        height={180}
                        width={180}
                        alt="megaphone"
                    />
                    <div className="mt-10 text-[#ffff] text-center leading-trim-both text-4xl font-bold leading-[1.2]">
                        <h1>Access</h1>
                        <h1>rate alert dashboard</h1>
                    </div>

                    <div className="text-white text-center leading-[140%] font-medium text-base opacity-[0.75] mt-8 ">
                        <p>Stay updated with real-time currency rates and</p>
                        <p> manage your alerts.</p>
                    </div>

                    <div className="mt-12">
                        <Login />
                    </div>

                    <div className="text-center text-[rgba(255,255,255,0.35)] font-normal text-[14px] leading-[125%] mt-8">
                        <p>By creating an account or signing you</p>
                        <p>
                            agree to our{" "}
                            <span className="text-[rgba(255, 255, 255, 0.50)] underline font-semibold">
                                Terms and Conditions
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
