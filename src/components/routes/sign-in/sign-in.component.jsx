// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
	signInWithgooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
	auth,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up/sign-up-form.component.";

const SignIn = () => {
	// useEffect(() => {
	// 	async function getData() {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await createUserDocumentFromAuth(response.user);
	// 			console.log(userDocRef);
	// 		}
	// 	}
	// 	getData();
	// }, []);
	const logGoogleUser = async () => {
		const { user } = await signInWithgooglePopup();
		const userDocRef = createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};
	// const logGoogleRedirectUser = async () => {
	// 	const { user } = await signInWithGoogleRedirect();
	// 	console.log(user);
	// };
	return (
		<div key="dk">
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In with google </button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
