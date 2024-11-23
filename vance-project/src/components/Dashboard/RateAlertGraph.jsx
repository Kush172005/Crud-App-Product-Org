import React, { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import plus from "../../assets/Icons/plus-black.png";
import PreviousAlerts from "./PreviousAlerts";
import SetAlert from "./SetAlert";

const RateAlertDashboard = () => {
    const [data, setData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("GBP");
    const [currentRate, setCurrentRate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSetAlert, setShowSetAlert] = useState(false); // State to manage modal visibility

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const code = selectedCountry === "GBP" ? "GBPINR=X" : "AEDINR=X";
            const response = await fetch(
                `https://web-api.vance.club/public/api/currency-converter/forex?code=${code}&timeline=1M`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonData = await response.json();

            const sortedData = jsonData.sort(
                (a, b) => new Date(a.resDate) - new Date(b.resDate)
            );

            const formattedData = sortedData.map((item) => ({
                date: new Date(item.resDate).toISOString().split("T")[0],
                rate: parseFloat(item.close),
            }));

            setData(formattedData);
            setCurrentRate(
                formattedData[formattedData.length - 1].rate.toFixed(2)
            );
        } catch (error) {
            console.error("Fetching error:", error);
            setError("Failed to fetch data. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedCountry]);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const toggleSetAlert = () => {
        setShowSetAlert(!showSetAlert);
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-indigo-600 text-white p-2 rounded-md">
                    <p className="text-lg font-bold">{`${payload[0].value.toFixed(
                        2
                    )}L`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={`bg-[#111] ${showSetAlert ? "overflow-hidden " : ""}`}>
            <div className="pt-12 flex flex-col items-center justify-center">
                <div className="text-white text-center leading-tight font-stabil-grotesk text-4xl font-bold tracking-normal">
                    Rate alert dashboard
                </div>
                <div className="bg-[#222] mt-12 rounded-3xl shadow-lg p-6 max-w-md w-full">
                    <div className="flex justify-between items-center mb-4">
                        <select
                            className="bg-gray-700 text-white rounded-md px-2 py-1"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                        >
                            <option value="GBP">UK £(GBP)</option>
                            <option value="AED">UAE د.إ(AED)</option>
                        </select>
                    </div>
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-4 text-red-500">
                            <p>{error}</p>
                            <button
                                onClick={fetchData}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Retry
                            </button>
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#444"
                                />
                                <XAxis
                                    dataKey="date"
                                    stroke="#888"
                                    tickFormatter={(tick) => tick}
                                />
                                <YAxis
                                    stroke="#888"
                                    domain={["auto", "auto"]}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Line
                                    type="monotone"
                                    dataKey="rate"
                                    stroke="#82ca9d"
                                    strokeWidth={2}
                                    dot={false}
                                    activeDot={{
                                        r: 8,
                                        fill: "#82ca9d",
                                        stroke: "#82ca9d",
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-white text-lg">
                            ₹{currentRate}
                        </span>
                        <button
                            onClick={toggleSetAlert}
                            className="bg-[#81EBAB] gap-1 text-[#0B0B0B] px-4 py-2 rounded-3xl flex items-center space-x-1"
                        >
                            <span>Set alert</span>
                            <img height={8} width={15} src={plus} alt="plus" />
                        </button>
                    </div>
                </div>
                <PreviousAlerts />
            </div>
            {showSetAlert && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
                    <SetAlert
                        setShowSetAlert={setShowSetAlert}
                        selectedCountry={selectedCountry}
                    />
                </div>
            )}
        </div>
    );
};

export default RateAlertDashboard;
