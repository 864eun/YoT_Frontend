import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';

function LoginButton() {
  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch {
      err => console.log(err);
    }
  };
  return (
    <>
      <button
        className="bg-stone-400 text-stone-200 px-5 py-2 rounded-full hover:bg-stone-500"
        onClick={handleSignIn}
      >
        Sign in
      </button>
    </>
  );
}

export default LoginButton;
