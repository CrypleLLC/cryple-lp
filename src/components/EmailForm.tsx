"use client";

import { useState, FormEvent, useId } from "react";
import Link from "next/link";

interface EmailFormProps {
  buttonStyle?: string;
  inputStyle?: string;
  containerStyle?: string;
}

export default function EmailForm({ 
  buttonStyle = "btn-primary", 
  inputStyle = "",
  containerStyle = ""
}: EmailFormProps) {
  const formId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          setStatus("success");
          setMessage("You are already on the list!");
          return;
        }
        throw new Error("Failed to subscribe. Please try again.");
      }

      setStatus("success");
      setMessage(""); // Clear message to show default success text
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className={containerStyle}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        {status === "success" ? (
          <div style={{
            padding: "1rem 2rem",
            borderRadius: "0.75rem",
            background: "rgba(16, 185, 129, 1)",
            color: "#ffffff",
            fontSize: "1.1rem",
            fontWeight: 600,
            textAlign: "center",
            width: "100%",
            maxWidth: "500px"
          }}>
            {message || "You're on the list! Keep an eye on your inbox."}
          </div>
        ) : (
          <>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: "500px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className={`email-input ${inputStyle}`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={buttonStyle}
                style={{ minWidth: "150px" }}
              >
                {status === "loading" ? "Sending..." : "Get Early Access"}
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem", fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", width: "100%", maxWidth: "500px", justifyContent: "center" }}>
              <input 
                type="checkbox" 
                id={`terms-${formId}`} 
                required 
                disabled={status === "loading"}
                style={{ cursor: "pointer", width: "16px", height: "16px", accentColor: "#6366f1" }}
              />
              <label htmlFor={`terms-${formId}`} style={{ cursor: "pointer" }}>
                I agree to the <Link href="/terms" style={{ color: "#ffffff", textDecoration: "underline" }} target="_blank">Terms of Service</Link>
              </label>
            </div>
            {status === "error" && message && (
              <div style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                background: "rgba(202, 0, 0, 1)",
                color: "white",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}>
                {message}
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
}
