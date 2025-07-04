import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaMoneyBillWave, FaHashtag, FaCreditCard, FaBoxOpen, FaClock } from 'react-icons/fa';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();

    const { data: paymentsAll = [], isLoading } = useQuery({
        queryKey: ['/payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        }
    });



    if (isLoading) return <div className="text-center mt-10 text-lg">Loading...</div>;

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 drop-shadow-md">💳 Payment History</h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {paymentsAll.map((pay) => (
                    <div
                        key={pay._id}
                        className="bg-white shadow-xl rounded-2xl border border-gray-200 hover:shadow-green-300 transition duration-300 ease-in-out p-6 flex flex-col gap-3"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <FaMoneyBillWave className="text-green-500" /> ${pay.amount}
                            </h3>
                            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full capitalize">{pay.paymentMethod}</span>
                        </div>

                        <p className="text-gray-600 text-sm flex items-center gap-2">
                            <FaHashtag className="text-gray-400" /> TxID: <span className="text-xs">{pay.transactionId}</span>
                        </p>

                        <p className="text-gray-600 text-sm flex items-center gap-2">
                            <FaBoxOpen className="text-purple-400" /> Parcel ID: <span className="text-xs">{pay.parcelId}</span>
                        </p>

                        <p className="text-gray-600 text-sm flex items-center gap-2">
                            <FaBoxOpen className="text-green-400" /> Parcel Name: <span className="text-xs font-semibold">{pay.parcelName}</span>
                        </p>

                        <p className="text-gray-600 text-sm flex items-center gap-2">
                            <FaCreditCard className="text-yellow-500" /> Email: <span className="text-xs">{pay.email}</span>
                        </p>

                        <p className="text-gray-600 text-sm flex items-center gap-2">
                            <FaClock className="text-pink-500" /> Paid At:{' '}
                            <span className="text-xs">{new Date(pay.paid_at).toLocaleString()}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentHistory;
