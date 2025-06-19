import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { setUser, clearUser } from '../../store/userSlice';
import { RootState } from '../../store/store';
import { sendUserToBackend } from '../../api/userApi';
import { User } from '../../types/User';

function LoginButton() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.currentUser);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // User 타입에 맞게 변환
      const userInfo: User = {
        id: firebaseUser.uid,
        displayName: firebaseUser.displayName,
        email: firebaseUser.email,
        emailVerified: firebaseUser.emailVerified,
        providerId: firebaseUser.providerId,
        creationTime: firebaseUser.metadata.creationTime
          ? new Date(firebaseUser.metadata.creationTime).toISOString()
          : null,
      };

      dispatch(setUser(userInfo));

      const idToken = await firebaseUser.getIdToken();
      console.log(idToken);
      await sendUserToBackend(idToken);
      // await sendUserToBackend(userInfo);

      // Firestore 저장 등 추가 작업이 있다면 여기에
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={user ? handleSignOut : handleSignIn}
      className="bg-stone-400 text-stone-200 px-5 py-2 rounded-full hover:bg-stone-500"
    >
      {user ? 'Sign out' : 'Sign in'}
    </button>
  );
}

export default LoginButton;
