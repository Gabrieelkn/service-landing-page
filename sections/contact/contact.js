"use client";
import styles from "./contact.module.css";
import { GiPhone } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "@/components/FormInput/FormInput";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (name === "message") {
      if (value.length < 20) {
        setErrorMessage("The message must contain at least 20 characters");
      } else {
        setErrorMessage("");
      }
    }
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      error: "The name should have at leat 3 characters",
      label: "Name",
      pattern: `^[^0-9]{4,}$`,
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      error: "Use a valid email address!",
      label: "Email",
      required: true,
    },
  ];

  const sendData = async (e) => {
    e.preventDefault();
    if (!error && !errorMessage) {
      setLoading(true);
      try {
        const response = fetch(`/api/sendContactData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formValues.name,
            email: formValues.email,
            message: formValues.message,
          }),
        });
        if (response) {
          toast.success("The message was successfully sent");
          setLoading(false);
          window.location.reload();
        }
      } catch (error) {
        setLoading(false);
        toast.error("An error occurred");
      }
    }
  };
  return (
    <div className={styles.contact}>
      <h2>Contact us</h2>
      <div className={styles.container}>
        <section className={styles.contactIconBlock}>
          <div>
            <GiPhone className={styles.icon} />
            <h3>Phone</h3>
            <a href="tel:0743089565">074121212</a>
          </div>
          <div>
            <FiMail className={styles.icon} />
            <h3>Email</h3>
            <a href="mailto:expertservice1974@gmail.com">youremail@gmail.com</a>
          </div>
          <div>
            <FaLocationArrow className={styles.icon} />
            <h3>Address</h3>
            <p>Germany, Number 22</p>
          </div>
        </section>
        <section className={styles.flexRowContainer}>
          <div className={styles.map}>
            <iframe
              title="GoogleMaps"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3960.678083540788!2d23.26220232513996!3d45.02927664735818!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sro!2sro!4v1677042804772!5m2!1sro!2sro"
            />
          </div>
          <div className={styles.contactFormDiv}>
            <Toaster />
            <h3>Send us a message</h3>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form className={styles.form} onSubmit={sendData}>
              <div className={styles.form_inputs}>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={formValues[input.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <TextArea
                handleChange={handleChange}
                error={errorMessage}
                formValues={formValues}
              />
              <button className={styles.button}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

function TextArea({ handleChange, error, formValues }) {
  return (
    <div className={styles.form_message}>
      <label htmlFor="message">Message</label>
      <textarea
        value={formValues.message}
        required
        onChange={handleChange}
        name="message"
      ></textarea>
      <span className={styles.error}>{error}</span>
    </div>
  );
}
