"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import sendEmail from "../../lib/sendemail"
export default function Home() {
  const [inputFullname, setFullname] = useState("");
  const [inputMessage, setMessage] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = {
      pageURL: window?.location?.href,
      fromPage: "MRC Domain Sale Offer",
      fullname: inputFullname,
      email: inputEmail,
      message: inputMessage,
    };

    console.log("E: " + formData.email);
    const submitted = sendEmail(formData);
    if (!submitted) {
      setSubmitMessage("Unable to submit form, please try again latter....");
    } else {
      var allInputs = document
        .getElementById("contactForm")
        ?.querySelectorAll("input");
      var areaText = document
        .getElementById("contactForm")
        ?.querySelectorAll("textarea");

      if (allInputs) {
        allInputs.forEach((singleInput) => (singleInput.value = ""));
      }

      if (areaText) {
        areaText.forEach((singleInput) => (singleInput.value = ""));
      }
      setSubmitMessage("Form submitted. Thank you for your interest!");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>
          Welcome to  {process.env.NEXT_PUBLIC_SITE_DOMAIN}
        </h1>
        <h2>This domain is for sale!</h2>
        <div className={styles.description}>
        Thank you for your interest in this premium domain! We're thrilled to see your enthusiasm and are open to negotiating a deal that works for both of us. Please feel free to reach out with your offer or any questions you may have. We look forward to working together to make this domain yours.
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.form}>
          <form id="contactForm" onSubmit={submitForm}>
            <div>Full Name: </div>
            <div>
              <input  onChange={(e) => setFullname(e.target.value)} 
                className={styles.input} required type="text"></input>
            </div>
            <br />
            <div>Email: </div>
            <div>
              <input onChange={(e) => setEmail(e.target.value)} 
                className={styles.input} required type="email"></input>
            </div>
            <br />
            <div>Details: </div>
            <div>
              <textarea onChange={(e) => setMessage(e.target.value)} 
              required className={styles.textarea}></textarea>
            </div>
            <div>
              <button className={styles.input + " " + styles.button}>SUBMIT</button>
            </div>
            <div>{submitMessage}</div>
          </form>
        </div>
      </div>
    </main>
  );
}
