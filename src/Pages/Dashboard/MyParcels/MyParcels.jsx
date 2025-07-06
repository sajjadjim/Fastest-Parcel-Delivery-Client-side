import { useQuery } from '@tanstack/react-query';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const MyParcels = () => {
    const navigate = useNavigate();
    const [parcels, setParcels] = useState([]);
    const { user } = use(AuthContext)
    // console.log("object", user?.email);
    const axiosSecure = UseAxiosSecure()
    const { data: parcelsAll = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data;
        }
    });

    // Copy to local state for filtering or editing
    useEffect(() => {
        if (parcelsAll.length) {
            setParcels(parcelsAll);
        }
    }, [parcelsAll]);

    // console.log(parcels)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This parcel will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`http://localhost:3000/parcels/${id}`, {
                    method: "DELETE",
                });

                if (res.ok) {
                    setParcels(parcels.filter((p) => p._id !== id));
                    Swal.fire("Deleted!", "Parcel has been deleted.", "success");
                } else {
                    Swal.fire("Error", "Failed to delete parcel.", "error");
                }
            }
        });
    };

    const handleUpdate = async (id) => {
        const { value: payment_status } = await Swal.fire({
            title: "Update Payment Status",
            input: "select",
            inputOptions: {
                paid: "Paid",
                unpaid: "Unpaid",
            },
            inputPlaceholder: "Select status",
            showCancelButton: true,
        });

        if (payment_status) {
            await fetch(`http://localhost:5000/parcels/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ payment_status }),
            });

            setParcels(
                parcels.map((p) =>
                    p._id === id ? { ...p, payment_status } : p
                )
            );

            Swal.fire("Updated!", "Payment status updated.", "success");
        }
    };

    // payment actione do here 
    const handlePayment = (id) => {
        // console.log("MPayment method is xlick now", id)
        navigate(`/dashboard/payment/${id}`)
    }

    return (
    <div className="p-4">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-indigo-700">
            📦 My Parcel Dashboard
        </h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full text-sm md:text-base text-left text-gray-700">
                <thead className="bg-indigo-100 text-indigo-700 uppercase tracking-wide">
                    <tr>
                        <th className="p-3">#</th>
                        <th className="p-3">Parcel Name</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Payment</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {parcels.map((parcel, idx) => (
                        <tr
                            key={parcel._id}
                            className="border-b hover:bg-gray-50 transition-all duration-150"
                        >
                            <td className="p-3">{idx + 1}</td>
                            <td className="p-3 font-semibold">{parcel.parcelName}</td>
                            <td className="p-3 text-sm text-gray-500">
                                {new Date(parcel.date).toLocaleDateString()}
                            </td>
                            <td className="p-3">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                        parcel.payment_status === "paid"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {parcel.payment_status.toUpperCase()}
                                </span>
                            </td>
                            <td className="p-3 space-x-2 text-center">
                                <button
                                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transition"
                                    onClick={() => handleUpdate(parcel._id)}
                                >
                                    ✏️ Update
                                </button>
                                <button
                                    className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-medium transition"
                                    onClick={() => handleDelete(parcel._id)}
                                >
                                    🗑️ Delete
                                </button>
                                {parcel.payment_status === "unpaid" && (
                                    <button
                                        className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium transition"
                                        onClick={() => handlePayment(parcel._id)}
                                    >
                                        💳 Pay Now
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {parcels.length === 0 && (
                <p className="text-center py-8 text-gray-500">
                    🚫 No parcels found.
                </p>
            )}
        </div>
    </div>
);

};

export default MyParcels;