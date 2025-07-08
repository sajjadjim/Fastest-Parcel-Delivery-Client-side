import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../Context/AuthContext";
import { use } from "react";

Modal.setAppElement("#root"); // IMPORTANT for accessibility

const AddParcel = () => {
    const { user } = use(AuthContext);
    // console.log(user.email)
    // data fetch here code from using axios 
    const axiosSecure = UseAxiosSecure()
    // dynamic Data Fetch here the all area coverage delivary 
    const warehouseData = useLoaderData()
    // console.log(warehouseData)

    const { register, handleSubmit, watch } = useForm();

    const [senderRegion, setSenderRegion] = useState("");
    const [receiverRegion, setReceiverRegion] = useState("");

    const [senderWarehouses, setSenderWarehouses] = useState([]);
    const [receiverWarehouses, setReceiverWarehouses] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [pendingData, setPendingData] = useState(null);
    const [calculatedCost, setCalculatedCost] = useState(null);

    //   parcel react hook form watch that unlimate power and control the form data and live update 
    const parcelType = watch("parcelType", "document");
    const parcelWeight = watch("parcelWeight", 0);

    useEffect(() => {
        const filteredSender = warehouseData.filter(
            (item) => item.region.toLowerCase() === senderRegion.toLowerCase()
        );
        setSenderWarehouses(filteredSender.flatMap((item) => item.covered_area));

        const filteredReceiver = warehouseData.filter(
            (item) => item.region.toLowerCase() === receiverRegion.toLowerCase()
        );
        setReceiverWarehouses(filteredReceiver.flatMap((item) => item.covered_area));
    }, [senderRegion, receiverRegion]);

    const calculateDeliveryCost = (type, weight, senderReg, receiverReg) => {
        const w = parseFloat(weight) || 0;
        const sameRegion = senderReg.toLowerCase() === receiverReg.toLowerCase();

        if (type === "document") {
            return sameRegion
                ? { amount: 60, label: "Within City" }
                : { amount: 80, label: "Outside City/District" };
        } else {
            if (w <= 3) {
                return sameRegion
                    ? { amount: 110, label: "Within City" }
                    : { amount: 150, label: "Outside City" };
            } else {
                const extra = (w - 3) * 40;
                return sameRegion
                    ? { amount: 110 + extra, label: "Within City" }
                    : { amount: 150 + extra + 40, label: "Outside City" };
            }
        }
    };

    const liveCost = calculateDeliveryCost(
        parcelType,
        parcelWeight,
        senderRegion,
        receiverRegion
    );


    //   here all the data store from the form data 
    const onSubmit = (data) => {
        const cost = calculateDeliveryCost(
            data.parcelType,
            data.parcelWeight,
            data.senderRegion,
            data.receiverRegion
        );
        setPendingData(data);
        setCalculatedCost(cost);
        setModalOpen(true); // Show modal
    };

    // parcel send status confirm here 
    const confirmSubmit = () => {
        const data = pendingData;
        const costObj = calculatedCost;
        const weight = parseFloat(data.parcelWeight) || 0;

        toast.success(
            `✅ Parcel Added:\n` +
            `📦 Type: ${data.parcelType === "document" ? "Document" : "Non-Document"}\n` +
            `⚖️ Weight: ${weight} kg\n` +
            `🏙️ Delivery Zone: ${costObj.label}\n` +
            `💸 Delivery Charge: ৳${costObj.amount}`,
            {
                position: "top-right",
                autoClose: 4000,
            }
        );

        console.log("Form submitted with data and delivery charge:", {
          ...data,
          parcelWeight: weight,
          deliveryCharge: costObj,
        trackingId: `TRK${Date.now()}${Math.floor(Math.random() * 1000)}`,
        date: new Date().toISOString().split("T")[0],
        });

        const parcelData = {
            ...data,
            email: user.email,
            payment_status: 'unpaid',
            parcelWeight: weight,
            deliveryCharge: costObj,
            trackingId: `TRK${Date.now()}${Math.floor(Math.random() * 1000)}`,
            date: new Date().toISOString().split("T")[0],
            delivery_status: 'not_collected',
        }

        // console.log("ALl the data ", parceldata);

        //   save data do the server 
        axiosSecure.post('/parcels', parcelData)
            .then((res) => {
                if (res.data && res.data.insertedId) {
                    toast.success("🎉 Parcel request added successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                } else {
                    toast.error("❌ Failed to add parcel request.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                }
            })
            .catch(() => {
                toast.error("❌ Failed to add parcel request.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            });



        setModalOpen(false);
        setPendingData(null);
    };

    const cancelSubmit = () => {
        toast.info("Parcel submission canceled.");
        setModalOpen(false);
        setPendingData(null);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-6xl mx-auto p-4 md:p-8 space-y-6"
            >
                <div>
                    <h1 className="text-3xl font-bold text-center">Send Parcel</h1>
                    <p className="text-center text-gray-500">Fill up the information</p>
                </div>

                {/* Parcel Type */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Parcel Type</h2>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="document"
                                {...register("parcelType")}

                            />
                            Document
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="not-document"
                                {...register("parcelType")}
                                defaultChecked
                            />
                            Non-Document
                        </label>
                    </div>
                </div>

                {/* Parcel Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Parcel name"
                        {...register("parcelName")}
                    
                        className="input"
                    />
                    <input
                        type="number"
                        placeholder="Parcel weight (kg)"
                        {...register("parcelWeight")}
                        className="input"
                        step="0.01"
                        min="0"
                    />
                </div>

                {/* Delivery Cost Display */}
                <div className=" p-4  gap-4 rounded text-sm">
                    <p>
                        <strong>Delivery Charge Estimate:</strong>
                    </p>
                    <p>
                        Zone: <b>{liveCost.label}</b>
                    </p>
                    <p>
                        Charge: <b>৳{liveCost.amount}</b>
                    </p>
                </div>

                {/* Sender & Receiver Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Sender */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sender Details</h3>
                        <div className="space-y-4">
                            <input
                                placeholder="Sender Name"
                                {...register("senderName")}
                                className="input"
                            />
                            <select
                                {...register("senderRegion")}
                                className="input"
                                onChange={(e) => setSenderRegion(e.target.value)}
                            >
                                <option value="">Select Region</option>
                                {[...new Set(warehouseData.map((d) => d.region))].map(
                                    (region) => (
                                        <option key={region} value={region}>
                                            {region}
                                        </option>
                                    )
                                )}
                            </select>
                            <select {...register("senderWarehouse")} className="input">
                                <option value="">Select Warehouse</option>
                                {senderWarehouses.map((wh, idx) => (
                                    <option key={idx} value={wh}>
                                        {wh}
                                    </option>
                                ))}
                            </select>
                            <input
                                placeholder="Sender Contact"
                                {...register("senderContact")}
                                className="input"
                            />
                            <input
                                placeholder="Sender Address"
                                {...register("senderAddress")}
                                className="input"
                            />
                            <textarea
                                placeholder="Pickup Instruction"
                                {...register("pickupInstruction")}
                                className="input h-24"
                            />
                        </div>
                    </div>

                    {/* Receiver */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Receiver Details</h3>
                        <div className="space-y-4">
                            <input
                                placeholder="Receiver Name"
                                {...register("receiverName")}
                                className="input"
                            />
                            <select
                                {...register("receiverRegion")}
                                className="input"
                                onChange={(e) => setReceiverRegion(e.target.value)}
                            >
                                <option value="">Select Region</option>
                                {[...new Set(warehouseData.map((d) => d.region))].map(
                                    (region) => (
                                        <option key={region} value={region}>
                                            {region}
                                        </option>
                                    )
                                )}
                            </select>
                            <select {...register("receiverWarehouse")} className="input">
                                <option value="">Select Warehouse</option>
                                {receiverWarehouses.map((wh, idx) => (
                                    <option key={idx} value={wh}>
                                        {wh}
                                    </option>
                                ))}
                            </select>
                            <input
                                placeholder="Receiver Contact"
                                {...register("receiverContact")}
                                className="input"
                            />
                            <input
                                placeholder="Receiver Address"
                                {...register("receiverAddress")}
                                className="input"
                            />
                            <textarea
                                placeholder="Delivery Instruction"
                                {...register("deliveryInstruction")}
                                className="input h-24"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-600">* Pickup Time: 4 PM - 7 PM approx.</p>

                <button
                    type="submit"
                    className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded"
                >
                    Continue
                </button>
            </form>
            <ToastContainer />
            {/* Custom Confirmation Modal */}
            <Modal
                isOpen={modalOpen}
                onRequestClose={cancelSubmit}
                className="bg-white max-w-lg mx-auto mt-40 p-6 rounded shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
            >
                <h2 className="text-xl text-black bg-transparent font-bold mb-4">Confirm Parcel Submission</h2>
                {pendingData && calculatedCost && (
                    <div className="space-y-2 text-sm text-gray-800">
                        <p>📦 Type: {pendingData.parcelType === "document" ? "Document" : "Non-Document"}</p>
                        <p>⚖️ Weight: {pendingData.parcelWeight} kg</p>
                        <p>🏙️ Zone: {calculatedCost.label}</p>
                        <p>💸 Charge: ৳{calculatedCost.amount}</p>
                    </div>
                )}
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={cancelSubmit}
                        className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={confirmSubmit}
                        className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded"
                    >
                        Confirm
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default AddParcel;
