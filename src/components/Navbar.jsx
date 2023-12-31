import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
const Navbar = () => {
const [user] = useAuthState(auth);

  const googleSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <header className='min-h-28 max-w-full py-6 bg-cyan-950 text-white  px-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='font-bold text-2xl md:text-3xl'>
          <span className='text-3xl font-extrabold md:text-4xl'>React Chat</span>
        </div>
        <div>
          <nav className='flex items-center gap-4'>
            {user ? (
              <button onClick={signOut}>Log Out</button>
            ) : (
              <div onClick={googleSingIn} className='bg-white min-w-fit h-8 flex items-center cursor-pointer rounded-full px-4 shadow-2xl'>
                <span className='flex item-center gap-3 justify-center text-black  '>
                  <FcGoogle size={25} /> Log in with Google
                </span>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
