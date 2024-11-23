import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase/firebase";
import GoogleIcon from "../../assets/Icons/Google-icon.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User Info:", user);
            navigate("/dashboard");
            alert(`Welcome, ${user.displayName}!`);
        } catch (error) {
            console.error("Error during login:", error.message);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="flex w-[353px] p-[15px_19px] justify-center items-center gap-3 rounded-[28px] bg-[#333]"
        >
            <div>
                <img src={GoogleIcon} alt="google" height={20} width={20} />
            </div>
            <div className="text-[#fff] font-semibold">Sign in with Google</div>
        </button>
    );
};

export default Login;
