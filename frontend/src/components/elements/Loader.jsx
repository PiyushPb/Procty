import React from "react";
import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loader;
