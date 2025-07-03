import { useSession } from 'next-auth/react'
import { createContext, useEffect, useReducer } from 'react'
import { userReducer, userReducerTypes } from '../hooks/userReducer'

const INITIAL_STATE = {
  user: null
}

export const UserContext = createContext({})

export function UserProvider ({ children }) {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated' && session && state.user === null) {
      dispatch({ type: userReducerTypes.setUser, payload: session.user })
    } else if (status === 'unauthenticated' && !session && state.user !== null) {
      dispatch({ type: userReducerTypes.unsetUser })
    }
  }, [status, session, state])
  return (
    <UserContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
