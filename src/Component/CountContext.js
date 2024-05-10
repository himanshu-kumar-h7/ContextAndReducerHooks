import { createContext } from "react"

const CountContext = createContext({
    name : "Monu",
    surname : "Kumar",
    age : 28,
    email : 'monu.com89@gmail.com',
    address : 'Naksha Atlantis',
})

export const CountContextProvider = CountContext.Provider
export const CountContextConsumer = CountContext.Consumer

export default CountContext

