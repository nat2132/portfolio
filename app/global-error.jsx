"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          background: "#000319",
          color: "#BEC1DD",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: 28, color: "white" }}>Something went wrong</h1>
        <p style={{ opacity: 0.7 }}>
          {error?.message ?? "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: "10px 20px",
            borderRadius: 10,
            border: "1px solid #CBACF9",
            background: "transparent",
            color: "#CBACF9",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
