import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Welcome = () => {
  const googleSignIn = () => {
    const provider =  new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  };
  return (
    <main className='bg-slate-300 w-full h-[100vh] flex flex-col items-center justify-center gap-3 text-center py-16'>
      <h1>Welcome to your app React Chat</h1>
      <p>
        Enter your <strong>Google Account</strong> to chat with other developers.
      </p>
      <div
        onClick={googleSignIn}
        className='bg-white min-w-fit h-12 flex items-center cursor-pointer rounded-full px-6 shadow-2xl'
      >
        <span className='flex item-center gap-3 justify-center text-black font-semibold  '>
          <FcGoogle size={30} /> Log in with Google 
        </span>
      </div>
    </main>
  );
};

export default Welcome;
