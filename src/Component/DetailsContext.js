import { createContext } from "react"

const DetailsContext = createContext({
    name : "monu",
    surname : "Kumar",
    age : 28,
    email : 'monu.com89@gmail.com',
    address : 'Naksha Atlantis',
})

export const DetailsContextProvider = DetailsContext.Provider
export const DetailsContextConsumer = DetailsContext.Consumer

export default DetailsContext

