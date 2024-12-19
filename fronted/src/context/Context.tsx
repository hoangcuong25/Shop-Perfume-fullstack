import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [navbar, setNavbar] = useState<string>('')

    const value = {
        navbar, setNavbar
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider