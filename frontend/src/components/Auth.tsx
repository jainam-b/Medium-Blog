import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SingupInput } from "@jainam-b/medium-comman";
import Signin from "../pages/Signin";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SingupInput>({
    name: "",
    username: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div>
          <div className="px-10">
            <div className="text-5xl font-bold">Create an account</div>
            <div className="text-xl text-center text-slate-500">
              {type==="signin"?"Don't have an account":"Already have an account?"}
              <Link className="pl-2 underline" to={type==="signin"?"/signup":"/signin" }>
                {type==="signin"?"Sign up":"Sign    in" }
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <LabelledInput
              label="Username"
              placeholder="Enter the username"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />

            <LabelledInput
              label="Email"
              placeholder="Enter Email"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              placeholder="Enter Password"
              type="password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
            <button type="button" className="mt-5 text-white bg-gray-800 hover:bg-gray-900 w-full focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type ==="signup"? "Sign up" : "Sign in"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface LabelledInput {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInput) {
  return (
    <div>
      <label className="block font-semibold mb-2 text-lg  text-black pt-4 ">
        {label}
      </label>
      <input
        id="first_name"
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border mt-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
