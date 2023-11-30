"use client";

import React, { useCallback, useState } from "react";
import "./HireATutorForm.css";
import dynamic from "next/dynamic";
const DatePicker = dynamic(() => import("react-datepicker"));
const ScrollToTop = dynamic(() => import("../ScrollToTop/ScrollToTop"));
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "@formspree/react";
const useRouter = dynamic(() =>
  import("next/navigation").then((module) => module.useRouter)
);

const HireATutorForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Parent/Guardian Information
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentAddress: "",

    // Student Information
    studentName: "",
    studentAgeGrade: "",
    studentSchool: "",
    specialNeeds: "",

    // Tutoring Preferences
    tutoringStartDate: "",
    tutoringFrequency: "",
    tutoringDaysTimes: "",
    tutoringSubjects: "",
    tutoringSessionDuration: "",
    tutoringLocation: "",

    // Goals and Expectations
    academicGoals: "",
    areasOfConcern: "",
    materialsNeeded: "",

    // Payment Information
    feeStructure: "",
    paymentMethod: "",
    paymentFrequency: "",

    // Cancellation Policy
    cancellationPolicy: "",

    // Additional Comments or Questions
    additionalComments: "",

    // How Did You Hear About Us
    referralSource: "",

    // Terms and Conditions
    agreedToTerms: false,

    // Privacy Policy
    agreedToPrivacyPolicy: false,

    // Consent for Minors
    consentForMinors: false,

    // Emergency Contact Information
    emergencyContactName: "",
    emergencyContactPhone: "",

    // Referral/Discount Information
    referralDetails: "",

    // Feedback/Review Permission
    reviewPermission: false,

    // Preferred Communication Method
    communicationMethod: "",
  });
  const [state, handleForm] = useForm("xleypybr");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await handleForm(e);
      // Check if all required fields are filled
      const requiredFields = [
        "parentName",
        "parentEmail",
        "parentPhone",
        "studentName",
        "studentAgeGrade",
        "studentSchool",
        "tutoringStartDate",
        "tutoringFrequency",
        "tutoringDaysTimes",
        "tutoringSubjects",
        "academicGoals",
        "tutoringSessionDuration",
        "areasOfConcern",
        // Add other required field names here
      ];

      const isFormValid = requiredFields.every((field) => formData[field]);

      if (!isFormValid) {
        <div className="custom-alert">
          alert("Please fill in all required fields before submitting.");
        </div>;
        return;
      }

      // Reset the form
      setFormData({ ...initialFormData });

      if (state.succeeded) {
        return router.push("/formSuccess");
        // return <p>Thanks You! We will contact you soon.</p>;
      }
    },
    [handleForm, formData, router, state.succeeded]
  );

  const initialFormData = { ...formData }; // Create a copy for resetting the form
  const [dateData, setDateData] = useState({
    tutoringStartDate: null, // Set the initial date value to null
  });
  const handleDate = useCallback(
    (date) => {
      setDateData({ ...dateData, tutoringStartDate: date });
    },
    [dateData]
  );

  return (
    <>
      <ScrollToTop />
      <div className="tutor-form-div" title="Tutor Form">
        <div className="tutor-form-container">
          <h2>Hire a Tutor</h2>
          <form
            className="tutor-form"
            onSubmit={handleSubmit}
            aria-labelledby="tutorFormHeading"
          >
            {/* Parent/Guardian Information */}
            <h3>Parent/Guardian Information</h3>
            <div className="form-group">
              <label htmlFor="parentName" aria-label="Full Name">
                Full Name:
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                aria-labelledby="tutorFormHeading parentName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentEmail" aria-label="Email Address">
                Email Address:
              </label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                aria-labelledby="tutorFormHeading parentEmail"
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentPhone" aria-label="Phone Number">
                Phone Number:
              </label>
              <input
                type="tel"
                id="parentPhone"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                required
                aria-labelledby="tutorFormHeading parentPhone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentAddress" aria-label="Address (Optional)">
                Address (optional):
              </label>
              <input
                type="text"
                id="parentAddress"
                name="parentAddress"
                value={formData.parentAddress}
                onChange={handleChange}
                placeholder="Enter your address (optional)"
                aria-labelledby="tutorFormHeading parentAddress"
              />
            </div>

            {/* Student Information */}
            <h3>Student Information</h3>
            <div className="form-group">
              <label htmlFor="studentName" aria-label="Student's Full Name">
                Student's Full Name:
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                placeholder="Enter student's full name"
                aria-labelledby="tutorFormHeading studentName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentAgeGrade" aria-label="Age/Grade Level">
                Age/Grade Level:
              </label>
              <input
                type="text"
                id="studentAgeGrade"
                name="studentAgeGrade"
                value={formData.studentAgeGrade}
                onChange={handleChange}
                required
                placeholder="Enter age/grade level"
                aria-labelledby="tutorFormHeading studentAgeGrade"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="studentSchool "
                aria-label="School Name (if applicable)"
              >
                School Name (if applicable):
              </label>
              <input
                type="text"
                id="studentSchool"
                name="studentSchool"
                value={formData.studentSchool}
                onChange={handleChange}
                placeholder="Enter school name (if applicable)"
                aria-labelledby="tutorFormHeading studentSchool"
              />
            </div>

            {/* Tutoring Preferences */}
            <h3>Tutoring Preferences</h3>
            <div className="form-group">
              <label
                htmlFor="tutoringStartDate"
                aria-label="Preferred Tutoring Start Date"
              >
                Preferred Tutoring Start Date:
              </label>
              <DatePicker
                id="tutoringStartDate"
                name="tutoringStartDate"
                selected={dateData.tutoringStartDate}
                onChange={handleDate}
                dateFormat="yyyy-MM-dd"
                placeholderText="Choose a preferred start date"
                isClearable
                aria-labelledby="tutorFormHeading tutoringStartDate"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="tutoringFrequency"
                aria-label="Frequency of Sessions"
              >
                Frequency of Sessions:
              </label>
              <input
                type="text"
                id="tutoringFrequency"
                name="tutoringFrequency"
                value={formData.tutoringFrequency}
                onChange={handleChange}
                placeholder="Enter frequency of sessions"
                aria-labelledby="tutorFormHeading tutoringFrequency"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="tutoringDaysTimes"
                aria-label="Preferred Days and Times for Sessions"
              >
                Preferred Days and Times for Sessions:
              </label>
              <input
                type="text"
                id="tutoringDaysTimes"
                name="tutoringDaysTimes"
                value={formData.tutoringDaysTimes}
                onChange={handleChange}
                placeholder="Enter preferred days and times"
                aria-labelledby="tutorFormHeading tutoringDaysTimes"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="tutoringSubjects"
                aria-label="Subject(s) or Topic(s) for Tutoring"
              >
                Subject(s) or Topic(s) for Tutoring:
              </label>
              <input
                type="text"
                id="tutoringSubjects"
                name="tutoringSubjects"
                value={formData.tutoringSubjects}
                onChange={handleChange}
                placeholder="Enter subjects or topics for tutoring"
                aria-labelledby="tutorFormHeading tutoringSubjects"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="tutoringSessionDuration"
                aria-label="Duration of Each Session"
              >
                Duration of Each Session:
              </label>
              <select
                id="tutoringSessionDuration"
                name="tutoringSessionDuration"
                value={formData.tutoringSessionDuration}
                onChange={handleChange}
                className="custom-select"
                aria-labelledby="tutorFormHeading tutoringSessionDuration"
              >
                <option value="">Select a duration</option>
                <option value="30">30 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
                <option value="120">120 minutes</option>
                {/* Add more duration options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tutoringLocation" aria-label="Mode of Tutoring">
                Mode of Tutoring:
              </label>
              <input
                type="text"
                id="tutoringLocation"
                name="tutoringLocation"
                value="Online"
                disabled={true}
                onChange={handleChange}
                placeholder="Mode of tutoring (e.g., Online)"
                aria-labelledby="tutorFormHeading tutoringLocation"
              />
            </div>

            {/* Goals and Expectations */}
            <h3>Goals and Expectations</h3>
            <div className="form-group">
              <label htmlFor="academicGoals" aria-label="Academic Goals">
                Academic Goals:
              </label>
              <textarea
                id="academicGoals"
                name="academicGoals"
                value={formData.academicGoals}
                onChange={handleChange}
                placeholder="Enter academic goals"
                aria-labelledby="tutorFormHeading academicGoals"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="areasOfConcern"
                aria-label="Any Specific Areas of Concern or Focus"
              >
                Any Specific Areas of Concern or Focus:
              </label>
              <textarea
                id="areasOfConcern"
                name="areasOfConcern"
                value={formData.areasOfConcern}
                onChange={handleChange}
                placeholder="Enter specific areas of concern or focus"
                aria-labelledby="tutorFormHeading areasOfConcern"
              />
            </div>
            {/* Additional Comments or Questions */}
            <div className="form-group">
              <label
                htmlFor="additionalComments"
                aria-label="Additional Comments or Questions"
              >
                Additional Comments or Questions:
              </label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                placeholder="Enter additional comments or questions"
                aria-labelledby="tutorFormHeading additionalComments"
              />
            </div>
            {/* How Did You Hear About Us */}
            <div className="form-group">
              <label
                htmlFor="referralSource"
                aria-label="How Did You Hear About Us"
              >
                How Did You Hear About Us:
              </label>
              <select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="custom-select"
                aria-labelledby="tutorFormHeading referralSource"
              >
                <option value="">Select an option</option>
                <option value="Internet">Internet</option>
                <option value="Friend">Friend</option>
                <option value="Advertisement">Advertisement</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button title="Submit the form" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HireATutorForm;
