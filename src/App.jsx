import React from "react";
import Signup from "./components/Signup";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#18181b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Signup />
    </div>
  );
}
