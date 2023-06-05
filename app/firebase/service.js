import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth();

export const handleSignUp = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    await user.reload();
    console.log('User created:', user.displayName);
  } catch (error) {
    console.log('Error signing up:', error.code, error.message);
  }
};

export const handleSignIn = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log('User logged in:', user.displayName);
  } catch (error) {
    console.log('Error signing in:', error.code, error.message);
  }
};
