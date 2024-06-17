import React, { useState } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";

const ProctorFormStep3 = ({ formData, setFormData, setActiveStep }) => {
  const [error, setError] = useState({});

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

  const handleOrgChange = (e) => {
    setFormData({
      ...formData,
      orgType: e,
    });
    setError({
      ...error,
      orgName: null,
    });
  };

  const handleNext = () => {
    if (!formData.orgName) {
      setError({
        ...error,
        orgName: "Please enter your organization name",
      });
      return;
    }
    setActiveStep((cur) => cur + 1);
  };

  const handlePrevious = () => {
    setActiveStep((cur) => cur - 1);
  };

  return (
    <div>
      <h2 className="formHeading">Enter Company / Institute details</h2>
      <div className="flex flex-col gap-5">
        <div>
          <Select
            label="Select Organization Type"
            value={formData.orgType}
            onChange={handleOrgChange}
            error={!!error.orgName}
          >
            <Option value="organization">Organization</Option>
            <Option value="institution">Institution</Option>
            <Option value="other">Other</Option>
          </Select>
          {error.orgName && (
            <p className="text-red-500 text-[12px]">{error.orgName}</p>
          )}
        </div>
        <div>
          <Input
            label="Company / Institute Name"
            type="text"
            name="orgName"
            required
            value={formData.orgName}
            onChange={handleInputChange}
            error={!!error.orgName}
          />
          {error.orgName && (
            <p className="text-red-500 text-[12px]">{error.orgName}</p>
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

export default ProctorFormStep3;
