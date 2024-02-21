import { useRef } from "react";
import { Input } from "../components/UI/Inputs/Input";
import { Button } from "../components/UI/Butons/Button";

export function SignUp() {
  const userNameRef = useRef<HTMLInputElement>(null)
  const eamilRef = useRef<HTMLInputElement>(null)
  const imageRef = useRef<HTMLInputElement>(null)
  const PasswordRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <h1 className="text-[34px] font-semibold font-[Outfit] mb-8 text-center">Sign Up</h1>
      <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-6
      items-center justify-items-end">
        <label htmlFor="userName">UserName</label>
        <Input className="w-full" id='userName' pattern="/S" required ref={userNameRef}/>
        <label htmlFor="email">Email</label>
        <Input className="w-full" id='email' pattern="/S" required ref={eamilRef}/>
        <label htmlFor="password">Password</label>
        <Input type="password" className="w-full" id='password' pattern="/S" required ref={PasswordRef}/>
        <label htmlFor="image">Image URL</label>
        <Input type="url" className="w-full" id='image' pattern="/S" required ref={imageRef}/>
        <Button className="col-span-full">Sign Up</Button>
      </form>
    </>
  );
}