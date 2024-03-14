import { useState } from "react";
import { Input } from "../components/UI/Inputs/Input";
import { Button } from "../components/UI/Butons/Button";
import { User } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function SignUp() {
  const auth = useAuth()
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      await auth?.authUser(user!)  // Send the user data to the back-end
      navigate('/chat');  // Redirect the user to the page
    } catch (err) {
      console.error('While sending req to back-end for reg a user. Error - ', err);
    }
  }

  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target // Get the value and id of the element 
    setUser({
      ...user!,
      [id]: value , // Update the user object with the new value
    }) 
  }

  return (
    <>
      <h1 className="text-[34px] font-semibold font-[Outfit] mb-8 text-center">Sign Up</h1>
      <p className="w-full text-[20px] text-red-500 text-center">{auth?.error}</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-6
      items-center justify-items-end" >
        <label htmlFor="name">UserName</label>
        <Input id='name' required value={user?.name} onChange={handleInput} />
        <label htmlFor="email">Email</label>
        <Input id='email' type='email' required value={user?.email} onChange={handleInput} />
        <label htmlFor="password">Password</label>
        <Input type="password" id='password' required value={user?.psw} onChange={handleInput} />
        <label htmlFor="image">
          Image URL
          <p className="text-gray-300 text-opacity-90 text-center">{'( Optional )'}</p>
        </label>
        <Input type="url" id='avatar'  value={user?.avatar} onChange={handleInput} />
        <Button className="col-span-full">Sign Up</Button>
      </form>
    </>
  );
}

