"use client";

import React, { useState } from "react";
import "./BookACall.css";
import dynamic from "next/dynamic";
import BookACallImage from "../../../../public/images/design.svg";
const Image = dynamic(() => import("next/image"));
const ScrollToTop = dynamic(() => import("../ScrollToTop/ScrollToTop"));
const useRouter = dynamic(() =>
  import("next/navigation").then((module) => module.useRouter)
);

import { useForm } from "@formspree/react";

const BookACall = () => {
  const router = useRouter();
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    jobTitle: "",
    country: "",
    organizationType: "",
    numStudents: "",
    howDidYouHear: "",
    additionalInfo: "",
    subscribeToUpdates: false,
  });
  
  const [state, handleForm] = useForm("xleypybr");

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleForm(e);
    // Handle form submission, e.g., send data to a server
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "schoolName",
      "jobTitle",
      "country",
      "organizationType",
      "numStudents",
      "howDidYouHear",
      // Add other required field names here
    ];
    const isFormValid = requiredFields.every((field) => formData[field]);

    if (!isFormValid) {
      <div className="custom-alert">
        alert("Please fill in all required fields before submitting.");
      </div>;
    }

    // Reset the form
    setFormData({ ...initialFormData });
  };
  const initialFormData = { ...formData };
  if (state.succeeded) {
    return router.push("/formSuccess");
  }
  return (
    <>
      <ScrollToTop />
      <div className="book-call-div">
        <div className="book-call-heading-div">
          <h1 title="Talk to our team">Talk to our team</h1>
          <Image
            src={BookACallImage}
            alt="design element with red circle, yellow square and green quad circle"
            title="Design Element"
          />
        </div>
        <div className="book-call-complete-div">
          <div className="book-call-text-div">
            <h2>
              Join many of education <br /> partners who already trust <br />{" "}
              TuTurns
            </h2>
            <p>
              Ready to give your students the 1:1 learning support they <br />{" "}
              need to take on any challenge?
            </p>
            <p>Book a call with our experts today to:</p>
            <ul>
              <li>
                Get an overview of the TuTurns platform and see a <br />{" "}
                personalized demo
              </li>
              <li>Discuss your questions and goals with a product expert</li>
              <li>
                Learn whether TuTurns is the right choice for <br /> your Child
              </li>
              <li>Receive pricing details based on your unique needs</li>
            </ul>
            <p>
              Are you a student, tutor, or current TuTurns customer? Visit{" "}
              <br /> our Contact Us page to get connected to the support <br />{" "}
              you're looking for.
            </p>
          </div>
          <div className="book-call-form-div">
            <form onSubmit={handleSubmit} className="form-formation">
              <div className="form-group2">
                <label className="form-label" htmlFor="firstName">
                  First Name <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  aria-label="Enter your first name"

                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="lastName">
                  Last Name <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  aria-label="Enter your last name"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="email">
                  Work Email <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your work email"
                  aria-label="Enter your work email"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="phoneNumber">
                  Phone number <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  aria-label="Enter your phone number"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="schoolName">
                  School/District Name <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your school or district name"
                  aria-label="Enter your school or district name"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="jobTitle">
                  Job Title <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  placeholder="Enter your job title"
                  aria-label="Enter your job title"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="country">
                  Country <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="Select your country"
                  aria-label="Select your country"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="organizationType">
                  Organization Type <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  required
                  placeholder="Select your organization type"
                  aria-label="Select your organization type"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="numStudents">
                  # No of students at your organization{" "}
                  <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="number"
                  id="numStudents"
                  name="numStudents"
                  value={formData.numStudents}
                  onChange={handleChange}
                  required
                  placeholder="Enter the number of students at your organization"
                  aria-label="Enter the number of students at your organization"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="howDidYouHear">
                  How did you hear about us? <span className="red">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how you heard about us"
                  aria-label="Tell us how you heard about us"
                />
              </div>

              <div className="form-group2">
                <label className="form-label" htmlFor="additionalInfo">
                  Anything else we should know?
                </label>
                <textarea
                  className="form-input"
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Additional information (optional)"
                  aria-label="Additional information (optional)"
                />
              </div>

              <button title="Submit your form" className="form-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookACall;
