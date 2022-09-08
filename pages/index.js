import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FormInput from "../components/FormInput";
import { useState } from "react";

export default function Home() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "Please enter email adress",
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      errorMessage: "Please enter password",
    },
  ];
  return (
    <div className="container">
      <div className="form-container">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        {/* ////login-form */}
      </div>
    </div>
  );
}
