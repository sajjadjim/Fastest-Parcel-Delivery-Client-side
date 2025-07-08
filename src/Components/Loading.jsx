// components/Loading.jsx
import { FaTruckLoading } from "react-icons/fa";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-base-100 text-center px-4">
            {/* Animated truck icon */}
            <div className="animate-bounce text-primary text-6xl mb-4">
                <FaTruckLoading />
            </div>

            {/* Main message */}
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Hang tight! We're loading your parcels...
            </h2>

            {/* Sub message */}
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mt-2">
                Our system is carefully processing your delivery information.
            </p>

            {/* DaisyUI spinner for extra visual feedback */}
            <span className="loading loading-spinner loading-lg text-primary mt-6"></span>
        </div>
    );
};

export default Loading;
