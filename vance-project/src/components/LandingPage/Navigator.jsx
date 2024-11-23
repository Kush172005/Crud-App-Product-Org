import React from "react";
import { useNavigate } from "react-router-dom";

const Navigator = ({ currentPage }) => {
    const navigate = useNavigate();

    const getButtonStyle = (pageIndex) => {
        return currentPage === pageIndex
            ? "bg-[#7C5BDA] text-[#fff]"
            : "bg-[#81EBAB] text-[#111] hover:border-black";
    };

    return (
        <div className="fixed top-[93%] z-[5000] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#81EBAB] rounded-[100px]">
            <div className="flex p-1 justify-center items-center gap-2 rounded-full">
                <button
                    onClick={() => navigate("/page2")}
                    className={`flex justify-center items-center rounded-full ${getButtonStyle(
                        1
                    )}`}
                >
                    <div className="flex h-[40px] px-4 justify-center items-center gap-2 rounded-full border border-transparent">
                        Currency Converter <span>₹</span>
                    </div>
                </button>
                <button
                    onClick={() => navigate("/page3")}
                    className={`flex justify-center items-center rounded-full ${getButtonStyle(
                        2
                    )}`}
                >
                    <div className="flex h-[40px] px-4 justify-center items-center gap-2 rounded-full border border-transparent">
                        Live Rates <span>(O)</span>
                    </div>
                </button>
                <button
                    onClick={() => navigate("/page4")}
                    className={`flex justify-center items-center rounded-full ${getButtonStyle(
                        3
                    )}`}
                >
                    <div className="flex h-[40px] px-4 justify-center items-center gap-2 rounded-full border border-transparent">
                        Set Rate Alert <span></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navigator;
