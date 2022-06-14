import {
	signInWithgooglePopup,
	createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithgooglePopup();
		const userDocRef = createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};
	return (
		<div key="dk">
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In with google </button>
		</div>
	);
};

export default SignIn;
