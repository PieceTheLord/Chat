import { useContext } from "react";
import { Context } from "../context/AuthContext";

 

const ChatPage = () => {
  const user = useContext(Context)

   return (
    <>
        <p>Hello, this is the chat</p>
        <table className="w-5">
          <tr>
            <th>User:</th>
            <td>
              {user!.user!.name}
            </td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>
            {user!.user!.email}
            </td>
          </tr>
          <tr>
            <th>Password:</th>
            <td>
             {user!.user!.psw}
            </td>
          </tr>
          <tr>
            <th>Avatar:</th>
            <td>{user!.user!.avatar}</td>
          </tr>
          <tr>
            <th>Token:</th>
            <td>{user!.token}</td>
          </tr>
        </table>
        <button onClick={() =>  user!.logOut} className=" bg-blue-300">LogOut</button>
    </>
  );
};

export default ChatPage;