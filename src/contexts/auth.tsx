import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'

interface AuthContextProps {
  user: User | null
  signIn: (code: string) => void
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

type User = {
  user: {
    id: string
    name: string
    login: string
    avatar_url: string
  }
}

type AuthResponse = {
  user: User
  userToken: string
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:userToken')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('/users/profile')
        .then(response => setUser(response.data))
    }
  }, [])

  const signIn = async (code: string) => {
    const response = await api.post<AuthResponse>('/authenticate', {
      code
    })
    const { user, userToken } = response.data

    localStorage.setItem('@dowhile:userToken', userToken)

    setUser(user)
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('@dowhile:userToken')
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}
