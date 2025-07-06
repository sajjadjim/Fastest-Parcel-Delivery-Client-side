import React from 'react';

const Forbidden = () => {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
        }}>
            <div style={{
                background: "rgba(0,0,0,0.4)",
                padding: "40px 60px",
                borderRadius: "20px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                textAlign: "center",
            }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{marginBottom: "20px"}}>
                    <circle cx="12" cy="12" r="10" fill="#ff4e50" opacity="0.8"/>
                    <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h1 style={{fontSize: "2.5rem", marginBottom: "10px", fontWeight: "bold", letterSpacing: "2px"}}>403 Forbidden</h1>
                <p style={{fontSize: "1.2rem", marginBottom: "25px"}}>
                    Sorry, you don't have permission to access this page.
                </p>
                <a href="/" style={{
                    display: "inline-block",
                    padding: "12px 32px",
                    background: "linear-gradient(90deg, #ff4e50 0%, #f9d423 100%)",
                    color: "#fff",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                    transition: "background 0.3s"
                }}>Go Home</a>
            </div>
        </div>
    );
};

export default Forbidden;