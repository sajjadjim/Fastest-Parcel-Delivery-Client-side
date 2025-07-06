// import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaIdCard, FaCarAlt, FaFileAlt, FaReceipt } from "react-icons/fa";
import { useLoaderData } from "react-router";
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthContext";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const RiderForm = () => {
    useEffect(() => {
        document.title = "Rider Form";
    }, []);
    // dynamic data loading 
    const data = useLoaderData();
    // State for region and city
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const { user } = use(AuthContext);
    const axiosSecure = UseAxiosSecure()

    // console.log("user", user);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        const riderInformation = {
            ...data,
            createTime: new Date().toISOString(),
            status: "pending",
        }
            // Send `data` to your backend here using axios/fetch
            // await axios.post('/api/riders', data)
            // Reset form and show success alert
            // eslint-disable-next-line no-undef
            ; (await axiosSecure.post('/riders', riderInformation))
                .then(response => {
                    if (response.data.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Your registration has been submitted successfully.",
                            icon: "success",
                            confirmButtonText: "OK"
                        });
                    }
                })


        // Reset form fields
        Object.keys(data).forEach(key => setValue(key, ""));
        setSelectedRegion("");
        setSelectedCity("");
    };


    const requirements = [
        {
            icon: <FaIdCard className="text-blue-600 text-2xl" />,
            title: "National Identity Card",
            desc: "Original copy of your NID is required."
        },
        {
            icon: <FaFileAlt className="text-green-600 text-2xl" />,
            title: "Driving License",
            desc: "Professional or non-professional license is accepted."
        },
        {
            icon: <FaCarAlt className="text-yellow-600 text-2xl" />,
            title: "Vehicle Registration Paper",
            desc: "Provide legal registration papers of your vehicle."
        },
        {
            icon: <FaReceipt className="text-red-600 text-2xl" />,
            title: "Tax Token",
            desc: "Valid tax token for your vehicle is required."
        }
    ];

    return (
        <div className="flex flex-col md:flex-row gap-10 p-5 md:p-20 bg-gray-50 min-h-screen">
            {/* Left: Form */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Register Now</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Vehicle Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Vehicle Type</label>
                        <select
                            {...register("vehicleType", { required: true })}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="Bike">Bike</option>
                            <option value="Scooter">Scooter</option>
                            <option value="Cycle">Cycle</option>
                        </select>
                        {errors.vehicleType && <p className="text-red-500 text-sm">Vehicle type is required</p>}
                    </div>

                    {/* Bike Registration Number */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Bike Registration Number *</label>
                        <input
                            type="text"
                            {...register("bikeRegistrationNumber", {
                                required: true
                            })}
                            placeholder="91XXXXXXXXX"
                            className="w-full border rounded px-3 py-2"
                        />
                        {/* {errors.mobile && <p className="text-red-500 text-sm">Valid number is required</p>} */}
                    </div>

                    {/* Name */}
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Full Name :</label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter your first name"
                                defaultValue={user?.displayName || ""}
                                className="w-full border rounded px-3 py-2 text-gray-500" readOnly
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Email Address :</label>
                            <input
                                type="text"
                                {...register("email")}
                                defaultValue={user?.email || ""}
                                placeholder="Enter your last name"
                                className="w-full border rounded px-3 py-2 text-gray-500" readOnly
                            />
                        </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile Number *</label>
                        <input
                            type="text"
                            {...register("mobile", {
                                required: true,
                                pattern: /^01[3-9]\d{8}$/
                            })}
                            placeholder="01XXXXXXXXX"
                            className="w-full border rounded px-3 py-2"
                        />
                        {errors.mobile && <p className="text-red-500 text-sm">Valid number is required</p>}
                    </div>
                    { /* Nid Number */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Nid Number *</label>
                        <input
                            type="number"
                            {...register("nid", {
                                required: true
                            })}
                            placeholder="91XXXXXXXXX"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    {/* Region Selection */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Region *</label>
                        <select
                            {...register("region", { required: true })}
                            className="w-full border rounded px-3 py-2"
                            onChange={e => {
                                setSelectedRegion(e.target.value);
                                setValue("region", e.target.value);
                                setSelectedCity(""); // Reset city when region changes
                                setValue("city", "");
                            }}
                            value={selectedRegion}
                        >
                            <option value="">Select region</option>
                            {Array.isArray(data) &&
                                [...new Set(data.map(item => item.region))].map((region, idx) => (
                                    <option key={idx} value={region}>
                                        {region}
                                    </option>
                                ))}
                        </select>
                        {errors.region && <p className="text-red-500 text-sm">Region is required</p>}
                    </div>

                    {/* City Selection */}
                    <div>
                        <label className="block text-sm font-medium mb-1">City *</label>
                        <select
                            {...register("city", { required: true })}
                            className="w-full border rounded px-3 py-2"
                            value={selectedCity}
                            onChange={e => {
                                setSelectedCity(e.target.value);
                                setValue("city", e.target.value);
                            }}
                            disabled={!selectedRegion}
                        >
                            <option value="">Select City</option>
                            {Array.isArray(data) &&
                                data
                                    .filter(item => item.region === selectedRegion)
                                    .map((item, idx) => (
                                        <option key={idx} value={item.city}>
                                            {item.city}
                                        </option>
                                    ))}
                        </select>
                        {errors.city && <p className="text-red-500 text-sm">City is required</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Right: Info */}
            <div className="w-full md:w-1/2">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Got a bike?</h2>
                    <p className="text-gray-600 mt-1 mb-3">These are the services you can be a part of!</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded">🛵 Bike Rider</span>
                        <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded">🍽 Food Man</span>
                        <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded">📦 Parcel Delivery</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">PickOn Rider: Easy Income Opportunity!</h3>
                    <p className="text-gray-600">
                        Now earn from 45,000 to 50,000 taka per month being a PickOn Rider. Enjoy 1% commission as a new rider.
                        Along with ride sharing, take the opportunity to earn extra income through parcel delivery.
                        Become a PickOn Hero today!
                    </p>
                </div>

                <div className="bg-gray-50 py-10 px-5 md:px-20 mt-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        What is required to apply?
                    </h2>
                    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                        Not sure if you’re eligible to be a rider? If you have the following documents, you can join us!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {requirements.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-lg shadow hover:shadow-md transition">
                                <div className="flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RiderForm;
