import { useState, createContext } from "react"

export const DataContext = createContext()

export const States = ({ children }) => {

    const [correo, setCorreo] = useState('')
    const [clave, setClave] = useState(null)
    const allDatas = {correo, setCorreo, clave, setClave}

    return (
        <DataContext.Provider value ={allDatas}>
            {children}
        </DataContext.Provider>
    )
}