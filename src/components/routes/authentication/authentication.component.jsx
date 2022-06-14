// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
	signInWithgooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
	auth,
} from "../../../utils/firebase/firebase.utils";
import SignInForm from "../../sign-in-form/sign-in-form.component.";
import SignUpForm from "../../sign-up/sign-up-form.component.";

const Authentication = () => {
	return (
		<div key="dk">
			<h1>Sign In Page</h1>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
