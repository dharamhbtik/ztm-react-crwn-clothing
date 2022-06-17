import { useState } from "react";

import {
  signInWithgooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      //   if (error.code === "auth/wrong-password") {
      //   }
      //   if (error.code === "auth/email-already-in-use") {
      //     alert("cannot create user , emailalready in use");
      //   }
      alert("Invalid email or password");
      console.log("Error while registering user", error.message);
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithgooglePopup();
    createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="Submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            google signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
