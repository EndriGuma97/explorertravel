import { createContext, useState } from "react";

export const LangContext = createContext({
  isEnglish: false

})

export const LangProvider = ({children}) => {
const [ isEnglish, setIsEnglish ] = useState(false);

const value = { isEnglish, setIsEnglish}

return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
)

}

