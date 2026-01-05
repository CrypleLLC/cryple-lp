"use client";

import { useState, FormEvent } from "react";

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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const endpoint = process.env.NEXT_PUBLIC_EMAIL_ENDPOINT;
      
      if (!endpoint) {
        throw new Error("Email endpoint not configured");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setStatus("success");
      setMessage("Thanks! We'll notify you when we launch.");
      setEmail("");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className={containerStyle}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: "500px" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === "loading"}
            className={inputStyle}
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "0.75rem",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: "1rem",
              flex: "1",
              minWidth: "250px",
              outline: "none",
            }}
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
        {message && (
          <div style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            background: status === "success" ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
            color: "white",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
