import React, { useEffect, useState } from "react";
import { Select, Option, Button } from "@material-tailwind/react";

const UserFormStep1 = ({ formData, setFormData, setActiveStep }) => {
  const [allowedToNextStep, setAllowedToNextStep] = useState(false);
  const handleNext = () => {
    if (formData.role) {
      setActiveStep((cur) => cur + 1);
    }
  };

  useEffect(() => {
    if (formData.role) {
      setAllowedToNextStep(true);
    }
  }, []);

  const handleRoleSelect = (e) => {
    setAllowedToNextStep(true);
    setFormData((prevData) => ({
      ...prevData,
      role: e,
    }));
    console.log(formData);
  };

  return (
    <div>
      <h2 className="formHeading">Select Role</h2>
      <div>
        <Select
          label="Select Role"
          onChange={handleRoleSelect}
          value={formData.role}
        >
          <Option value="student">Student / Working Professional</Option>
          <Option value="admin">Proctor Admin</Option>
        </Select>
        <div className="mt-5">
          <Button
            disabled={!allowedToNextStep}
            onClick={handleNext}
            className="capitalize font-poppins font-medium"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserFormStep1;
