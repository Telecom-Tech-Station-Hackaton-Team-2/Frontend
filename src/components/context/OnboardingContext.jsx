import React from 'react';
import { createContext, useState } from "react"

export const OnboardingUserContext = createContext()

export const OnboardingUserProvider = ({ children }) => {
  const [accessList, setAccessList] = useState(null)

  const [trainingList, setTrainingList] = useState(null)

  const fetchOnboardingAccessList = async () => {
    let response = await fetch("https://run.mocky.io/v3/c6ae5a52-5ce1-4386-9ae8-35d3e01b5e02")
    response = await response.json()
    setAccessList(response)
  }

  const fetchOnboardingTrainingList = async () => {
    let response = await fetch("https://run.mocky.io/v3/c6ae5a52-5ce1-4386-9ae8-35d3e01b5e02")
    response = await response.json()
    setTrainingList(response)
  }

  return (
    <OnboardingUserContext.Provider value={{ accessList, fetchOnboardingAccessList, trainingList, fetchOnboardingTrainingList }}>
      {children}
    </OnboardingUserContext.Provider>
  )
}
