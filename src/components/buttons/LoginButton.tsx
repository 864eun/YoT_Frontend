// components/LoginButton.tsx
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { setUser, clearUser } from '../../store/userSlice';
import { RootState } from '../../store/store';

function LoginButton() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.currentUser);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // 타입 정의에 맞춰 객체 생성
      const userInfo = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        providerId: user.providerId,
        creationTime: user.metadata.creationTime ?? null,
      };

      dispatch(setUser(userInfo));

      // Firestore 저장 (선택 사항)
      // await setDoc(doc(db, 'users', user.uid), userInfo);
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
