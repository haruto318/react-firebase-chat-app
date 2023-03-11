
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../firebase';

function SendMessages() {
  const [message, setMessage] = useState<any | null>("");

  async function sendMessage(event: any) {
    event.preventDefault();

    try {
      const data = await addDoc(collection(db, 'messages'), {
          text: message,
          timestamp: serverTimestamp(),
          uid: auth.currentUser?.uid,
          username: auth.currentUser?.displayName,
      });
      localStorage.setItem(data.id, message)
      console.log(data.id)
      console.log(localStorage)
      setMessage("");
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className='send-message'>
      <form onSubmit={sendMessage} className=''>
        <div className='send-message-item'>
          <input placeholder='Send Message' type="text" onChange={(e: any) => setMessage(e.target.value)} value={message}/>
        </div>
      </form>
    </div>
  )
}

export default SendMessages