import {  createContext } from "react"

export interface AuthContext { // * Instance of Context 
  user: User | null,
  token: string | null,
  authUser: (data: User) => Promise<void>,
  logOut: () => Promise<void>,
  logIn: (data: any) => Promise<void>
  error: string,
}

export interface User { // * Instance of our user
  avatar?: String,
  name: String,
  des?: String,
  email: String,
  psw: String,
}

export const Context = createContext<AuthContext | null>(null) // Create the context
