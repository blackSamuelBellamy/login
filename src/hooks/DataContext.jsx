import { useState, createContext } from "react"
import Coders from '../coders.json'


export const DataContext = createContext()

export const States = ({ children }) => {

    const [correo, setCorreo] = useState('')
    const [clave, setClave] = useState(null)
    const [hamburgerDisplay, setHamburgerDisplay] = useState(false)
    const [filtradorDisplay, setFiltradorDisplay] = useState(false)
    const [coders, setCoders] = useState(Coders)

    const allDatas = {
        correo, setCorreo, clave, setClave,
        hamburgerDisplay, setHamburgerDisplay,
        filtradorDisplay, setFiltradorDisplay,
        coders, setCoders
    }

    return (
        <DataContext.Provider value={allDatas}>
            {children}
        </DataContext.Provider>
    )
}