import { ReactNode, useContext, useState } from "react"
import { User, Context } from './AuthContext'

type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('site') || null  // get the token from the local storage
  )

  const authUser = async (data: any) => { // Function for creating a user
    try {
      const req = await fetch('http://localhost:3002/signup', { // Send a request to the back-end
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!req.ok) throw new Error(`Bad response ${req.status}`)

      const res = await req.json()  // * Get a data from the request in json format

      if (await res.data) {  // Check if the data is exists.
        setUser(res.data)
        setToken(res.token)
        localStorage.setItem('site', res.token)
        return;
      }

      throw new Error(res.errMsg);

    } catch (err) {
      console.error("Error in AuthProvider", err);
    }
  }

  const logOut = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('site')
  }

  return <Context.Provider value={{ token, user, authUser, logOut }}>
    {children}
  </Context.Provider>
}

export default AuthProvider;

export function useAuth() {
  return useContext(Context)
}