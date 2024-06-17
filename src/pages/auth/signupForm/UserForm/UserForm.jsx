import React from "react";
import UserFromStep1 from "./UserFromStep1";

const UserForm = () => {
  return (
    <>
      <div className="flex">
        <p className="h-10 w-10 rounded-full border-[1px] flex justify-center items-center">
          1
        </p>
        <p className="h-10 w-10 rounded-full border-[1px] flex justify-center items-center">
          2
        </p>
        <p className="h-10 w-10 rounded-full border-[1px] flex justify-center items-center">
          3
        </p>
        <p className="h-10 w-10 rounded-full border-[1px] flex justify-center items-center">
          4
        </p>
      </div>
      <UserFromStep1 />
      <UserFromStep1 />
      <UserFromStep1 />
      <UserFromStep1 />
    </>
  );
};

export default UserForm;
