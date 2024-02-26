import { useContext } from "react";
import { Context } from "../context/AuthContext";

 

const ChatPage = () => {
  const user = useContext(Context)

   return (
    <>
        Hello, this is the chat
        User: {user!.user!.name}
        Email: {user!.user!.email}
        Password: {user!.user!.password}
    </>
  );
};

export default ChatPage;