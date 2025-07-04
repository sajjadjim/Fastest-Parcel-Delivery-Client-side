import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const PaymentForm = () => {

    // taken from react stripe docs 
    const stripe = useStripe()
    const elements = useElements()

    // control here the form submit button data for payment method system 
    const handleSubmit = async(e) => {
        e.preventDefault();

        // if your have don't payment elements your can not payment 
        if (!stripe || !elements)
            return;

        const card = elements.getElement(CardElement);

        if(!card){
            return
        }

        const {erro , paymentMethod} = await stripe.createPaymentMethod({
            type :'card',
            card,
        })

        if(erro){
            console.log(erro)
        }
        else{
            console.log("Payment method" , paymentMethod)
        }

    }
    // State for error message
    const [error, setError] = React.useState("");

    return (
        <div className="max-w-md mx-auto p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-white shadow-xl rounded-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Payment Details</h2>
                <div className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Card Information</span>
                        <div className="mt-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-4 focus-within:border-blue-500 transition-all
                            md:w-[420px] md:max-w-full">
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: "17px",
                                            color: "#1e293b",
                                            letterSpacing: "0.025em",
                                            "::placeholder": { color: "#94a3b8" },
                                            fontFamily: "inherit",
                                            backgroundColor: "#f8fafc",
                                            padding: "10px 0"
                                        },
                                        invalid: { color: "#ef4444" }
                                    },
                                    hidePostalCode: true,
                                }}
                                className="bg-transparent"
                                onChange={e => setError(e.error ? e.error.message : "")}
                            />
                        </div>
                    </label>
                    {error && (
                        <div className="text-red-500 text-sm font-medium mt-1">{error}</div>
                    )}
                    <div className="flex items-center gap-3 mt-2">
                        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Visa</span>
                        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Mastercard</span>
                    </div>
                </div>
                <button
                    type='submit'
                    disabled={!stripe}
                    className={`w-full py-3 btn-primary text-gray-600 rounded-lg font-bold text-lg shadow-md transition-all ${
                        !stripe ? "opacity-50 cursor-not-allowed" : "hover:from-blue-700 hover:to-blue-600"
                    }`}
                >
                    Pay For Parcel Pickup
                </button>
                <div className="text-xs text-gray-400 text-center mt-2">
                    Your payment is secure and encrypted.
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;