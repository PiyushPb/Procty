import React, { useRef, useState } from "react";
import { Button } from "@material-tailwind/react";
import { IoCloudUploadOutline } from "react-icons/io5";

const UserFormStep3 = ({ formData, setFormData, setActiveStep }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (!preview) {
      setError("Please upload a profile photo.");
      return;
    } else {
      setActiveStep((cur) => cur + 1);
    }
  };

  const handlePrevious = () => {
    setActiveStep((cur) => cur - 1);
  };

  const handleOnUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!fileTypes.includes(file.type)) {
      setError("Please upload a PNG, JPEG, or JPG file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("File size should be 2 MB or less.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
      setFormData((prevData) => ({
        ...prevData,
        profilePhoto: reader.result,
      }));
      setError(null);
    };
  };

  return (
    <div>
      <h2 className="formHeading">Upload Profile Photo</h2>
      <div className="flex gap-5 flex-col">
        <div
          className="w-full h-[200px] border-[1px] border-dashed border-[#ccc] flex justify-center items-center flex-col cursor-pointer hover:bg-gray-100 hover:border-gray-500 rounded-md overflow-hidden transition-all duration-300 group"
          onClick={handleOnUploadClick}
        >
          {preview ? (
            <img
              src={preview}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <IoCloudUploadOutline className="w-[70px] h-[70px] text-black/50 group-hover:text-gray-800 transition-all duration-300" />
              <p className="text-black/50 text-[12px] group-hover:text-gray-800 transition-all duration-300">
                Upload Profile photo
              </p>
            </>
          )}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
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

export default UserFormStep3;
