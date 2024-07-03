import React from "react";
import Qoute from "../components/Qoute";
import Auth from "../components/Auth";

const Signup = () => {
  return (
    <div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
          <Auth type="signup"></Auth>
        </div>
        <div className="hidden lg:block">
          <Qoute />
        </div>
      </div>
    </div>
  );
};

export default Signup;
