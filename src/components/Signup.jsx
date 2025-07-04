import React, { useState } from "react";
import Stepper, { Step } from "./Stepper/Stepper";
import BlurText from "./BlurText/BlurText";
import RoundedSlideButton from "./RoundedSlideButton";
import {useNavigate   }

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div style={{ transform: "scale(1.35)", maxWidth: 1500, width: "100%", padding: "48px 32px" }}>
      <Stepper
        initialStep={1}
        nextButtonProps={{ as: RoundedSlideButton, className: "group" }}
        nextButtonText="Continue"
      >
        <Step>
          <h2>
            <BlurText text="Signup Page" />
          </h2>
          <p>
            <BlurText text="Please enter your name to get started." />
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: 8, border: "1px solid #333", marginTop: 16, width: "100%" }}
          />
        </Step>
        <Step>
          <h2>
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
            style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: 8, border: "1px solid #333", marginTop: 16, width: "100%" }}
          />
        </Step>
        <Step>
          <h2>
            <BlurText text="Password" />
          </h2>
          <p>
            <BlurText text="Create a password for your account." />
          </p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: 8, border: "1px solid #333", marginTop: 16, width: "100%" }}
          />
        </Step>
        <Step>
          <h2>
            <BlurText text="Confirm Password" />
          </h2>
          <p>
            <BlurText text="Please confirm your password." />
          </p>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: 8, border: "1px solid #333", marginTop: 16, width: "100%" }}
          />
        </Step>
      </Stepper>
    </div>
  );
}
