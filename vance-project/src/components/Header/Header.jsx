import React from "react";
import VanceLogo from "../../assets/images/Vance-logo.svg";
import downloadIcon from "../../assets/Icons/download-icon.png";
import { useNavigate } from "react-router-dom";
import { KeyRound } from "lucide-react";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#111] flex justify-center p-4 border-b-[1px] border-[rgba(255,255,255,0.10)]">
            <div className="flex w-[70%] justify-between items-center">
                <div className="cursor-pointer" onClick={() => navigate("/")}>
                    <img src={VanceLogo} alt="" />
                </div>
                <div className="text-white flex gap-2">
                    <button className="bg-[#81EBAB] flex justify-center items-center gap-2 text-base text-[#0B0B0B] font-semibold px-4 py-3 rounded-[100px]">
                        Download app
                        <img
                            src={downloadIcon}
                            height={11}
                            width={20}
                            alt="download"
                        />
                    </button>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="bg-[#81EBAB] flex justify-center items-center gap-1 text-base text-[#0B0B0B] font-semibold px-4 py-3 rounded-[100px]"
                    >
                        Login
                        <KeyRound height={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
