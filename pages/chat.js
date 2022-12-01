import React, { useRef, useState } from "react";
import "./chat.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDDTrgWTi87NcOMc_vdBzNwLPs_YSzUAvU",
  authDomain: "chat-af1f9.firebaseapp.com",
  projectId: "chat-af1f9",
  storageBucket: "chat-af1f9.appspot.com",
  messagingSenderId: "167007985708",
  appId: "1:167007985708:web:2840531948587b7821f189",
  measurementId: "G-XPH1PR3T7V",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="text-center margin-auto p-5 h-screen w-full md:w-1/2">
      <h1 className="my-4">Chat Room</h1>

      <header
        style={{ backgroundColor: "#181717", minHeight: "50px" }}
        className="text-white w-full flex items-center justify-between z-50 p-3"
      >
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section
        style={{ background: "rgb(40, 37, 53)" }}
        className="flex flex-col justify-center"
      >
        {user ? <ChatRoom key={user.id} /> : <SignIn />}
      </section>
    </div>
  );
};

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button
        style={{ color: "#28c34", maxWidth: "400px" }}
        className="margin-auto bg-blue-500 rounded-md text-blue mx-auto mt-3 p-3 text-white font-semibold"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
      <p
        className="text-center text-white relative"
        style={{
          marginBottom: "12px",
          lineHeight: "24px",
          padding: "10px 20px",
          borderRadius: "25px",
        }}
      >
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main
        style={{ background: "#1e1e24", height: "300px" }}
        className="p-3 flex flex-col overflow-y-scroll hide"
      >
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.createdAt} message={msg} />
          ))}

        <span ref={dummy}></span>
      </main>

      <form
        style={{
          background: "rgb(24, 23, 23)",
          height: "4vh",
        }}
        className="w-full flex text-base"
        onSubmit={sendMessage}
      >
        <div className="flex w-full">
          <input
            style={{
              lineHeight: "1.5",
              fontSize: "1.5",
              background: "rgb(58, 58, 58)",
              padding: "0 10px",
              height: "4vh",
            }}
            className="w-full text-white border-none"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Say something nice"
          />
          <button type="submit" disabled={!formValue}>
            🕊️
          </button>
        </div>
      </form>
    </div>
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`flex items-center ${messageClass}`}>
        <img
          referrerPolicy="no-referrer"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            margin: "2px 5px",
          }}
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p
          style={{
            maxWidth: "500px",
            marginBottom: "12px",
            lineHeight: "24px",
            padding: "10px 20px",
            borderRadius: "25px",
            position: "relative",
            background: "#0b93f6",
            color: "white",
            textAlign: "center",
          }}
          className="mb-3 relative text-white text-center rounded-md"
        >
          {text}
        </p>
      </div>
    </>
  );
};

export default Chat;
