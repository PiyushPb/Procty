import React, { useState } from "react";
import { Stepper, Step } from "@material-tailwind/react";
import Loader from "../../../components/elements/Loader";
import UserFromStep1 from "./UserForm/UserFromStep1";
import UserFormStep2 from "./UserForm/UserFormStep2";
import UserFormStep3 from "./UserForm/UserFormStep3";
import UserFormStep4 from "./UserForm/UserFormStep4";

const UserForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const [formData, setFormData] = useState({});

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        className="my-5"
      >
        <Step className="cursor-pointer">1</Step>
        <Step className="cursor-pointer">2</Step>
        <Step className="cursor-pointer">3</Step>
        <Step className="cursor-pointer">4</Step>
      </Stepper>
      {activeStep === 0 && (
        <UserFromStep1
          formData={formData}
          setFormData={setFormData}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 1 && (
        <UserFormStep2
          formData={formData}
          setFormData={setFormData}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 2 && (
        <UserFormStep3
          formData={formData}
          setFormData={setFormData}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 3 && (
        <UserFormStep4
          formData={formData}
          setFormData={setFormData}
          setActiveStep={setActiveStep}
        />
      )}
    </>
  );
};

export default UserForm;
