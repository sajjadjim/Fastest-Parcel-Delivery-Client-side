import React from 'react';
import UseAxiosSecure from './UseAxiosSecure';

const useTrackingLogger = () => {
    const axiosSecure = UseAxiosSecure()

    const logTracking = async ({ trackingId, status, details, updated_by }) => {
        try {
            const payload = {
                trackingId,
                status,
                details,
                
                updated_by,
            };
            await axiosSecure.post("/trackings", payload);
            console.log("Tracking Details logged successfully:", payload);
        } catch (error) {
            console.error("Failed to log tracking:", error);
        }
    };

    return { logTracking };
};

export default useTrackingLogger;