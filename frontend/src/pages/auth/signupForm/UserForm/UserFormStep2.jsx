import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";

const UserFormStep2 = ({ formData, setFormData, setActiveStep }) => {
  const [error, setError] = useState({});
  const [allowedToNextStep, setAllowedToNextStep] = useState(false);

  useEffect(() => {
    const { firstName, lastName, dob, phoneNumber } = formData;
    if (
      firstName &&
      lastName &&
      dob &&
      phoneNumber &&
      phoneNumber.length === 10 &&
      isDateValid(dob)
    ) {
      setAllowedToNextStep(true);
    } else {
      setAllowedToNextStep(false);
    }
  }, [formData]);

  const handleNext = () => {
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = "Please enter your first name";
    }

    if (!formData.lastName) {
      errors.lastName = "Please enter your last name";
    }

    if (!formData.dob) {
      errors.dob = "Please enter your date of birth";
    } else if (!isDateValid(formData.dob)) {
      errors.dob = "You must be at least 10 years old";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Please enter your phone number";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      setActiveStep((cur) => cur + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [name]: null,
    }));
  };

  const handlePrevious = () => {
    setActiveStep((cur) => cur - 1);
  };

  const isDateValid = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age > 10;
    }
    return age >= 10;
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  return (
    <div>
      <h2 className="formHeading">Personal Details</h2>
      <div className="flex gap-5 flex-col">
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              type="text"
              label="First Name"
              name="firstName"
              onChange={handleInputChange}
              value={formData.firstName || ""}
              error={!!error.firstName}
              required
            />
            {error.firstName && (
              <p className="text-red-500 text-[12px]">{error.firstName}</p>
            )}
          </div>
          <div className="flex-1">
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              onChange={handleInputChange}
              value={formData.lastName || ""}
              error={!!error.lastName}
              required
            />
            {error.lastName && (
              <p className="text-red-500 text-[12px]">{error.lastName}</p>
            )}
          </div>
        </div>
        <div>
          <Input
            label="DOB"
            type="date"
            name="dob"
            onChange={handleInputChange}
            value={formData.dob || ""}
            error={!!error.dob}
            required
          />
          {error.dob && <p className="text-red-500 text-[12px]">{error.dob}</p>}
        </div>
        <div>
          <Input
            label="Phone Number"
            type="number"
            name="phoneNumber"
            onChange={handleInputChange}
            value={formData.phoneNumber || ""}
            error={!!error.phoneNumber}
            required
          />
          {error.phoneNumber && (
            <p className="text-red-500 text-[12px]">{error.phoneNumber}</p>
          )}
        </div>
        <div className="flex justify-between gap-3">
          <Button
            onClick={handlePrevious}
            className="flex-1 capitalize font-poppins font-medium"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="flex-1 capitalize font-poppins font-medium"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserFormStep2;
