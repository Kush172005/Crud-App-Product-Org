import React from "react";
import appleLogo from "../../../assets/Icons/apple-logo.png";
import playStore from "../../../assets/Icons/play-store.png";
import mobileHandRed from "../../../assets/images/mobile-hand-red.svg";
import Navigator from "../Navigator";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navigator />
            <div className="relative m-0 ">
                <div className="absolute inset-0 z-10 flex flex-col items-center">
                    <div className="text-[#fff] text-center text-[56px] font-bold leading-[120%] mt-[90px]">
                        Always know when it's a
                    </div>
                    <div className="text-[#fff] text-center text-[56px] font-bold leading-[120%]">
                        good time to transfer with
                    </div>
                    <div className="text-[#fff] text-center text-[24px] font-medium leading-[140%] opacity-75 mt-2">
                        Say goodbye to forex fees - get the best value for your
                        <br />
                        transfers
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="flex h-16 px-5 justify-end items-center gap-2 rounded-full border-[2px] border-[#2D2D2D]">
                            <img
                                src={appleLogo}
                                height={32}
                                width={25}
                                alt="apple"
                            />
                            <div className="flex flex-col text-[#fff] items-center ">
                                <div className="text-[12px] font-semibold">
                                    Download on the
                                </div>
                                <div className="text-[20px] leading-4 font-bold">
                                    App store
                                </div>
                            </div>
                        </div>
                        <div className="flex h-16 px-5 justify-end items-center gap-2 rounded-full border-[2px] border-[#2D2D2D]">
                            <img
                                src={playStore}
                                height={32}
                                width={25}
                                alt="playStore"
                            />
                            <div className="flex flex-col text-[#fff] items-center">
                                <div className="text-[12px] font-semibold">
                                    Download on the
                                </div>
                                <div className="text-[20px] leading-4 font-bold">
                                    Play store
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src={mobileHandRed}
                    alt="mobile"
                    className="absolute transition-all duration-1000 translate-y-0 opacity-100 z-10"
                />

                <div className="absolute mt-[50%] z-[5000] left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex p-4 items-center gap-12 rounded-xl bg-[#7265EE] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.10)]">
                    <div className="flex flex-col justify-center items-center  text-[#D2D2D2] text-[18px]">
                        Set Your First
                        <span className="text-[#fff] font-semibold">
                            Rate alert
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => navigate("/MainPage")}
                            className="flex h-9 px-3 justify-center text-[#0B0B0B] items-center gap-4 rounded-full bg-[#81EBAB]"
                        >
                            Accept
                        </button>
                        <button className="flex h-9 px-3 justify-center text-[#fff] items-center gap-4 rounded-full bg-[#111]">
                            Ignore
                        </button>
                    </div>
                </div>
                <div class="background-effect-color"></div>
            </div>
        </div>
    );
};

export default Page4;
