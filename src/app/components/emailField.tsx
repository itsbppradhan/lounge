"use client";

import { PlaceholdersAndVanishInput } from "@/components/placeholders-and-vanish-input";
import { useState } from "react";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Share email to unlock magic.",
    "Share email for amazing updates.",
    "Type email to start the journey.",
  ];

  const [email, setEmail] = useState(""); // State to hold the email input
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [submitted, setSubmitted] = useState(false); // State to track submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value); // Update email state
    console.log(value); // Log the current input value
    setErrorMessage(""); // Clear error message on input change
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log("submitted", email); // Log the email to be submitted

    if (!email) {
      setErrorMessage("Email is required"); // Set error message if email is empty
      return; // Exit if no email is provided
    }

    try {
      const response = await fetch("/api/subscribe", { // Call your route API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email in the body
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get error details from response
        throw new Error(errorData.error || "Network response was not ok");
      }

      const data = await response.json();
      console.log("Email submitted successfully:", data); // Log successful response
      setSubmitted(true); // Update submission status
      setEmail(""); // Clear email input after submission
    } catch (error) {
      console.error("Error submitting email:", error); // Log any error that occurs
      setErrorMessage("Error submitting email. Please try again."); // Set generic error message
    }
  };

  return (
    <>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange} // Pass the handleChange function to update the email state
        onSubmit={onSubmit} // Pass the onSubmit function to handle form submission
      />
      {/* Show submission confirmation message if submitted successfully */}
      {submitted && <p style={{ color: 'green' }}>Please check your inbox to confirm your email.</p>}
      {/* Show error message if any */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
}
