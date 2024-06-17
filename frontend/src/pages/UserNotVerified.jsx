import React from "react";

const UserNotVerified = () => {
  return (
    <div className="flex justify-center items-center h-screen p-10 w-full">
      <div className="max-w-[600px] flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-center">
          User Not Verified
        </h2>
        <p className="text-center">
          An email has been sent to your email{" "}
          {/* TODO: add dynamic email here */}
          <span className="font-bold">piyushpardeshi@gmail.com</span>. Please
          click on the received link to verify your account. If you did not
          receive the email please check your spam folder. or click here to{" "}
          <span className="font-bold">resend it.</span>
          <br />
          <br />
          <p>
            Please note if the account is not verified within 21 days it will
            get deleted from our database and you have to re-signup.
          </p>
        </p>
      </div>
    </div>
  );
};

export default UserNotVerified;
