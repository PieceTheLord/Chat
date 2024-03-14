import { ReactNode, useContext, useState } from "react"
import { User, Context } from './AuthContext'

type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string>('')
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('site') || null // get the token from the local storage
  )
  const authUser = async (data: User) => { // Function for creating a user
    try {
      const req = await fetch('http://localhost:3002/signup', { // Send a request to the back-end
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const res = await req.json()  // * Get a data from the request in json format

      if (!req.ok) {
        return setError(await res.msgErr)  // Set the error if the responst failed
      }


      if (req.ok) {  // Check if the data is exists.
        setError('') // Zeroing the error
        setUser(res.data)  // Set the response user's data
        setToken(res.token)  // Set the token in the state
        localStorage.setItem('site', res.token)  // Set the token in the local storage
        return;
      }

    } catch (err) {
      console.error("Error in AuthProvider", err);  //    
    }
  }

  const logIn = async (data: User) => {
    const req = await fetch('http://localhost:3002/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const res = await req.json()

    if (!req.ok) {
      return setError(res.msgErr)
    }

    if (req.ok) {
      setUser(res.data)
      setToken(res.token)
      localStorage.setItem('site', res.token)
      return;
    }
  }

  const logOut = async () => {
    await fetch(`http://localhost:3002/logout`, {
      method: "POST"
    })
    setUser(null)
    setToken(null)
    localStorage.removeItem('site')
    return;
  }

  return <Context.Provider value={{ error, token, user, authUser, logOut, logIn }}>
    {children}
  </Context.Provider>
}

export default AuthProvider;

export function useAuth() {
  return useContext(Context)
}