import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome'
import ChatBox from './components/ChatBox'

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar />
      {
        !user ? <Welcome /> : <ChatBox />
      }
      <h1>Hola Mundo</h1>
    </>
  );
}

export default App;
