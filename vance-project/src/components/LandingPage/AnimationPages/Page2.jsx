import React from "react";
import appleLogo from "../../../assets/Icons/apple-logo.png";
import playStore from "../../../assets/Icons/play-store.png";
import mobilHandBlack from "../../../assets/images/mobile-hand-black.svg";

const Page2 = () => {
    return (
        <div>
            <div className="text-[#111] text-center font-stabil-grotesk text-[56px] font-bold leading-[120%] mt-[90px]">
                Send money to India at Google rates.
            </div>

            <div className="text-[#111] text-center font-stabil-grotesk text-[24px] font-medium leading-[140%] opacity-75 mt-2">
                Say goodbye to forex fees - get the best value for your
                transfers
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <div class="flex h-16 px-5 justify-end items-center gap-2 rounded-full bg-[#111]">
                    <img src={appleLogo} height={32} width={25} alt="apple" />
                    <div className="flex flex-col text-[#fff] items-center">
                        <div className="text-[12px] font-semibold">
                            Download on the
                        </div>
                        <div className="text-[20px] leading-4 font-bold">
                            App store
                        </div>
                    </div>
                </div>
                <div class="flex h-16 px-5 justify-end items-center gap-2 rounded-full bg-[#111]">
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
            <div className="mt-[96px] flex justify-center">
                <img src={mobilHandBlack} alt="mobile" />
            </div>
        </div>
    );
};

export default Page2;
