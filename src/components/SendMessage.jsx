import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

const SendMessage = () => {
  const [message, setMessage] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim === '') {
      alert('hey! Envía un mensaje válido');
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      cerateAt: serverTimestamp(),
      uid,
    });
    setMessage('');
  };

  return (
    <form onSubmit={(e) => sendMessage(e)}>
      <label htmlFor='messageInput' hidden>
        Enter message
      </label>
      <input
        value={message}
        type='text'
        id='messageInput'
        name='messageInput'
        placeholder='Type message'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default SendMessage;
