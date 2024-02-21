import { ReactNode, createContext, useContext } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from 'axois'

type AuthContext = {

}

type User = {
  avatar?: String,
  name: String,
  des?: String,
  email: String,
  password: String,
}

type AuthProviderProps = {
  children: ReactNode
}

const Context = createContext<AuthContext | null>(null)

export function AuthProvider({ children }: AuthProviderProps) {
  const signup = useMutation({
    mutationFn: (user: User) => {
    return axios.post(`${import.meta.env.BACK_END_URL}/signup`, user)
    }
  })

  return <Context.Provider value={{}}>
    {children}
  </Context.Provider>
}

export function useAuth() {
  return useContext(Context)
}