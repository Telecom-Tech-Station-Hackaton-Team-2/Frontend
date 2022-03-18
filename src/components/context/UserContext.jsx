import { noAuto } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { createContext, useState } from "react"

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const fetchCurrentUser = async () => {
    let response = await fetch("https://onboarding-backend-team-2.herokuapp.com/api/users", {mode: 'no-cors'})
    response = await response.json()
    setCurrentUser(response)
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
