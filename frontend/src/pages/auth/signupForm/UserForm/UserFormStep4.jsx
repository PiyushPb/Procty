import React, { useState } from "react";
import { Input, Button, Checkbox } from "@material-tailwind/react";

const UserFormStep4 = ({ formData, setFormData, setActiveStep }) => {
  const [error, setError] = useState({});

  const handleSubmit = () => {
    let errors = {};

    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(formData.password)) {
      errors.password =
        "Password must include at least one uppercase letter, one special character, and one number.";
    }

    if (formData.password.length < 8) {
      errors.passwordLength = "Password must be at least 8 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      // Update formData with email and password
      setFormData({
        ...formData,
        email: formData.email,
        password: formData.password,
      });
      // Perform final submission or navigation here
      console.log(formData);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError({
      ...error,
      [name]: null,
    });
  };

  return (
    <div>
      <h2 className="formHeading">Set email and password</h2>
      <div className="flex flex-col gap-5">
        <div>
          <Input
            label="Email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            error={!!error.email}
          />
          {error.email && (
            <p className="text-red-500 text-[12px]">{error.email}</p>
          )}
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              label="Password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              error={!!error.password || !!error.passwordLength}
            />
            {error.password && (
              <p className="text-red-500 text-[12px]">{error.password}</p>
            )}
            {error.passwordLength && (
              <p className="text-red-500 text-[12px]">{error.passwordLength}</p>
            )}
          </div>
          <div className="flex-1">
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!!error.confirmPassword}
            />
            {error.confirmPassword && (
              <p className="text-red-500 text-[12px]">
                {error.confirmPassword}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <Checkbox
            required
            onChange={(e) =>
              handleInputChange({
                target: { name: "agreeTerms", value: e.target.checked },
              })
            }
          />
          <p>I agree to the Terms and Conditions</p>
        </div>
        <div>
          <Button className="w-full" variant="gradient" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserFormStep4;
