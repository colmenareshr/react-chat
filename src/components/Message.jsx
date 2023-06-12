import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div
      className={`chat-bubble ${
        message.uid === user.uid ? 'chat-bubble__right' : ''
      }`}
    >
      <img
        className='w-9 h-9 rounded-full mr-3'
        src={message.avatar}
        alt='user avatar'
      />
      <div>
        <p className='font-bold mb-1 text-base text-[#1c2c4c]'>
          {message.name}
        </p>
        <p className='break-all'>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
