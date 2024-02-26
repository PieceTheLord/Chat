import {  createContext } from "react"

export interface AuthContext { // * Instance of Context 
  user: User | null,
  token: string | null,
  authUser: (data: any) => Promise<void>,
  logOut: () => void,
}

export interface User { // * Instance of our user
  avatar?: String,
  name: String,
  des?: String,
  email: String,
  password: String,
}

export const Context = createContext<AuthContext | null>(null) // Create the context
