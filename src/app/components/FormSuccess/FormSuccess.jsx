import React from "react";
import "./FormSuccess.css"; // Import the CSS file for styling
import { CheckCircle } from "@mui/icons-material";

const FormSuccess = () => {
  return (
    <div className="form-success-div">
      <div className="form-success-container">
        <CheckCircle sx={{fontSize: "100px", color: "#4ca34c", padding: "20px 50px 10px 50px"}}/>
        <h2 className="form-success-heading">Thank You!</h2>
        <p className="form-success-message">
          We have received your submission. We will contact you soon.
        </p>
        {/* Add any additional content or links as needed */}
      </div>
    </div>
  );
};

export default FormSuccess;
