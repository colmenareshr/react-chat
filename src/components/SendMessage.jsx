import { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className='fixed bottom-0 w-full py-5 px-8 bg-slate-400 flex'>
      <label htmlFor='messageInput' hidden>
        Enter Message
      </label>
      <input
        id='messageInput'
        name='messageInput'
        type='text'
        className='h-10 p-3 w-full rounded-l-lg border-none flex-grow-1 bg-slate-50 text-blue-950 placeholder:text-slate-400 focus:outline-none shadow-2xl'
        placeholder='type message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button 
      className='h-10 w-16 py-1 px-3 rounded-r-lg font-bold text-slate-950 bg-orange-400 shadow-2xl'
      type='submit'>Send</button>
    </form>
  );
};

export default SendMessage;
