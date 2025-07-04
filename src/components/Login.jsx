import React, { useState } from "react";
import Stepper, { Step } from "./Stepper/Stepper";
import BlurText from "./BlurText/BlurText";
import RoundedSlideButton from "./RoundedSlideButton";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{
      transform: "scale(1.35)",
      maxWidth: 400,
      width: "100%",
      padding: "32px 120px 32px",
      minHeight: 520,
      border: '2px solid rgb(18, 83, 213)',
      borderRadius: '72px',
      background: 'black',
      margin: 'auto',
      marginTop: 60,
      marginBottom: 60,
      boxShadow: '0 2px 8px rgba(26, 139, 225, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Stepper
        initialStep={1}
        nextButtonProps={{ as: RoundedSlideButton, className: "group", style: { marginTop: 32, marginBottom: 32 } }}
        nextButtonText="Continue"
        backButtonProps={{ as: RoundedSlideButton, className: "group", style: { marginTop: 32, marginBottom: 32 } }}
        backButtonText="Back"
      >
        <Step>
          <h2 style={{fontSize:"3rem"}} >
            <BlurText text="Login Page" />
          </h2>
          <p style={{fontSize:"1rem"}} >
            <BlurText text="Please enter your name to continue." />
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: 10, border: "1px solid #333", marginTop: 16, width: "100%" }}
          />
        </Step>
        <Step>
          <h2 style={{fontSize:"3rem"}} >
            <BlurText text="Email Address" />
          </h2>
          <p>
            <BlurText text="Please enter your email address." />
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: 10, border: "1px solid #333", marginTop: 16, width: "100%" }}
          />
        </Step>
        <Step>
          <h2 style={{fontSize:"3rem"}} >
            <BlurText text="Password" />
          </h2>
          <p>
            <BlurText text="Please enter your password." />
          </p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: 10, border: "1px solid #333", marginTop: 16, width: "100%" }}
          />
        </Step>
      </Stepper>
    </div>
  );
} 