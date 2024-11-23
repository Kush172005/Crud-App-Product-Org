import React, { useEffect, useState } from "react";
import { db, auth } from "../../Firebase/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import ukImage from "../../assets/Icons/uk.png";
import uaeImage from "../../assets/Icons/uae.png";

const PreviousAlerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribeAuth();
    }, []);

    useEffect(() => {
        let unsubscribeAlerts = () => {};

        if (user) {
            const alertsCollectionRef = collection(db, "alerts");
            const q = query(
                alertsCollectionRef,
                where("userId", "==", user.uid)
            );

            unsubscribeAlerts = onSnapshot(
                q,
                (querySnapshot) => {
                    const alertsData = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setAlerts(alertsData);
                    setLoading(false);
                },
                (error) => {
                    console.error("Error fetching real-time alerts:", error);
                    setLoading(false);
                }
            );
        }

        return () => unsubscribeAlerts();
    }, [user]);

    if (loading) {
        return <div className="text-[#fff]">Loading...</div>;
    }

    if (!user) {
        return (
            <div className="text-[#fff]">
                Please log in to view your alerts.
            </div>
        );
    }

    return (
        <div className="w-[448px] mt-[96px] mb-8">
            <div className="text-[#fff] font-bold my-5">Previous alerts</div>
            <div className="flex flex-col gap-6 ">
                {alerts.length > 0 ? (
                    alerts.map((alert) => (
                        <div className="h-[154px] flex justify-between p-6 items-start self-stretch rounded-[24px] bg-[#222] backdrop-blur-[54px]">
                            <div key={alert.id} className="flex flex-col ">
                                <div className="text-[#fff] font-medium">
                                    {alert.title}
                                </div>
                                <div className="text-white font-stabil text-2xl font-bold leading-none mt-2">
                                    ₹{alert.alertAmount}
                                </div>
                                <div className="mt-4 flex gap-2">
                                    {alert.country === "GBP" ? (
                                        <>
                                            <img
                                                src={ukImage}
                                                height={24}
                                                width={24}
                                                alt="ukImage"
                                            />
                                            <div className="text-[#fff] h-[24px] flex justify-center items-center gap-2 font-semibold">
                                                UK{" "}
                                                <span className="opacity-[0.5] text-sm">
                                                    د.إ(AED)
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <img
                                                src={uaeImage}
                                                height={24}
                                                width={24}
                                                alt="uaeImage"
                                            />
                                            <div className="text-[#fff] flex justify-center items-center gap-2 h-[24px] font-semibold">
                                                UAE{" "}
                                                <span className="opacity-[0.5] text-sm">
                                                    £(GBP)
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="text-white">
                                {alert.createdAt
                                    ? new Date(
                                          alert.createdAt.toDate()
                                      ).toLocaleDateString()
                                    : "Invalid date"}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-[#fff]">No alerts set yet.</div>
                )}
            </div>
        </div>
    );
};

export default PreviousAlerts;
