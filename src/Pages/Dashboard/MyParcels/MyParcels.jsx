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
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                📦 Parcel List
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 rounded-lg shadow-sm">
                    <thead className=" text-sm md:text-base">
                        <tr>
                            <th className="p-2 border text-left">#</th>
                            <th className="p-2 border text-left">Parcel Name</th>
                            <th className="p-2 border text-left">Date</th>
                            <th className="p-2 border text-left">Payment Status</th>
                            <th className="p-2 border text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, idx) => (
                            <tr key={parcel._id} className="border-t text-sm md:text-base">
                                <td className="p-2 border">{idx + 1}</td>
                                <td className="p-2 border">{parcel.parcelName}</td>
                                <td className="p-2 border">{parcel.date}</td>
                                <td className="p-2 border">
                                    <span
                                        className={`px-2 py-1 rounded text-white text-xs md:text-sm ${parcel.payment_status === "paid"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                            }`}
                                    >
                                        {parcel.payment_status}
                                    </span>
                                </td>
                                <td className="p-2 border space-x-2">
                                    <button
                                        className="px-2 md:px-3 py-1 cursor-pointer bg-green-400 rounded text-black text-xs md:text-sm"
                                        onClick={() => handleUpdate(parcel._id)}
                                    >
                                        View
                                    </button>
                                    <button
                                        className="px-2 md:px-3 py-1 cursor-pointer bg-yellow-400 rounded text-black text-xs md:text-sm"
                                        onClick={() => handleUpdate(parcel._id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="px-2 md:px-3 py-1 cursor-pointer bg-red-500 text-white rounded text-xs md:text-sm"
                                        onClick={() => handleDelete(parcel._id)}
                                    >
                                        Delete
                                    </button>
                                    {/* if dont may then paid the products  */}
                                    {
                                        parcel.payment_status === "unpaid" && (
                                            <button
                                                className="px-2 md:px-3 py-1 cursor-pointer bg-blue-500 text-white rounded text-xs md:text-sm"
                                                onClick={() => handlePayment(parcel._id)}
                                            >
                                                Pay Now
                                            </button>
                                        )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {parcels.length === 0 && (
                    <p className="text-center py-6 text-gray-500">No parcels found.</p>
                )}
            </div>
        </div>
    );
};

export default MyParcels;