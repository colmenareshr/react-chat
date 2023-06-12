import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Welcome = () => {
  const googleSignIn = () => {
    const provider =  new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  };
  return (
    <main className='bg-slate-300 w-full h-[100vh] flex flex-col items-center justify-center gap-2 text-center py-16'>
      <h1>Bienvenido a tu App React Chat</h1>
      <p>
        Entra con tu cuenta de Goolge para chatear con otros desarrolladores
      </p>
      <div
        onClick={googleSignIn}
        className='bg-white min-w-fit h-12 flex items-center cursor-pointer rounded-full px-6 shadow-2xl'
      >
        <span className='flex item-center gap-3 justify-center text-black font-semibold  '>
          <FcGoogle size={30} /> Login with Google
        </span>
      </div>
    </main>
  );
};

export default Welcome;
