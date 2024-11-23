import React, { useState } from "react";
import ukFlag from "../../assets/Icons/uk.png";
import uae from "../../assets/Icons/uae.png";
import plus from "../../assets/Icons/plus-black.png";
import { db, auth } from "../../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

const SetAlert = ({ setShowSetAlert, selectedCountry }) => {
    const [title, setTitle] = useState("");
    const [rate, setRate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        if (!user) {
            alert("Please log in to set an alert!");
            return;
        }

        try {
            await addDoc(collection(db, "alerts"), {
                userId: user.uid,
                title: title,
                alertAmount: rate,
                createdAt: new Date(),
                country: selectedCountry,
            });

            alert("Alert set successfully!");
            setShowSetAlert(false);
        } catch (error) {
            console.error("Error setting alert:", error);
            alert("Failed to set alert. Please try again.");
        }
    };

    return (
        <div className="bg-[#222] rounded-3xl shadow-lg p-6 max-w-sm w-full">
            <h1 className="text-white text-center text-xl mb-4">
                Set Rate Alert!
            </h1>
            <div className="flex justify-center mb-4">
                <img
                    height={64}
                    width={64}
                    src={selectedCountry === "GBP" ? ukFlag : uae}
                    alt={selectedCountry === "GBP" ? "UK Flag" : "UAE Flag"}
                    className="rounded-full"
                />
            </div>
            <div className="text-center text-white mb-6">
                <p>
                    {selectedCountry === "GBP" ? "UK £ (GBP)" : "UAE د.إ (AED)"}
                </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-[#fff]"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-[#4F4F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Send money home"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="rate"
                        className="block text-sm font-medium text-[#fff]"
                    >
                        Rate Alert Value
                    </label>
                    <input
                        type="text"
                        id="rate"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-[#4F4F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="₹ 1000"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#81EBAB] text-[#111] py-2 rounded-[100px] flex justify-center items-center space-x-2 hover:bg-green-400"
                >
                    <span>Set alert</span>
                    <img height={8} width={15} src={plus} alt="plus" />
                </button>
            </form>
            <div className="text-center mt-6">
                <button
                    onClick={() => setShowSetAlert(false)}
                    className="text-[#fff] hover:text-white focus:outline-none"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SetAlert;
