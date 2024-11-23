import React from "react";
import appleLogo from "../../../assets/Icons/apple-logo.png";
import playStore from "../../../assets/Icons/play-store.png";
// import mobileHandBlue from "../../../assets/images/mobile-hand-blue.png";
import mobileHandBlue from "../../../assets/images/mobile-hand-blue.svg";

const Page3 = () => {
    return (
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
                src={mobileHandBlue}
                alt="mobile"
                className="absolute transition-all duration-1000 translate-y-0 opacity-100 z-10"
            />
            <div class="background-effect-color"></div>
        </div>
    );
};

export default Page3;
