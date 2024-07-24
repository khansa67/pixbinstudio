import React, { useState } from "react";
import "./Contact.css";
import { FaSpinner } from "react-icons/fa";
import Navbar from "../pages/navbar/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
    setSuccessMessage(""); // Clear success message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for empty fields
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormError(
        "One or more fields have an error. Please check and try again."
      );
      setSuccessMessage(""); // Clear success message on error
    } else {
      setFormError("");
      setLoading(true);

      // Simulate form submission delay
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setLoading(false);
        setSuccessMessage("Thank you for your message. It has been sent."); // Set success message
        setFormData({ name: "", email: "", title: "", message: "" }); // Clear form fields
      }, 2000);
    }
  };

  return (
    <>
    <div className="nav"><Navbar/></div>
    <div id="contact-section" className="contact-container">
      <div className="contact-info">
        <h2>
          <b>
            Got A Project Or <br />A Partnership In Mind?
          </b>
        </h2>
        <p className="p">
          Holisticly leverage other's user friendly platforms with progressive
          products. Proactively matrix exceptional content through B2C schemas.
          Seamlessly exploit cutting-edge niche markets rather than premium
          results. Collaboratively restore pandemic e-business and plug-and-play
          data. Conveniently target exceptional platforms whereas standards
          compliant data.
        </p>
        <h3>Email:</h3>
        <p className="p-1">contact@pixbinstudios.com</p>
        <p className="p-2">info@pixbinstudios.com</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group name-email">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message">
                  Please fill out this field.
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">
                  Please fill out this field.
                </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="submit-container">
            <button type="submit" disabled={loading}>
              {loading ? <FaSpinner className="spinner" /> : "Send"}
            </button>
          </div>
          {formError && (
            <div
              className="form-error"
              style={{
                color: "black",
                backgroundColor: "#ffb900",
                marginTop: "10px",
              }}
            >
              {formError}
            </div>
          )}
          {successMessage && (
            <div
              className="form-success"
              style={{
                color: "black",
                backgroundColor: "#ffb900",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "5px",
              }}
            >
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
