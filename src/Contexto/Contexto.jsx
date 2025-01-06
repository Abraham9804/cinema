import { createContext, useState } from "react";

export const FavoritoContexto = createContext()

export const FavoritoContextoProvider = ({children}) => {
    const [favorito, setFavorito] = useState([])

    return (
            <FavoritoContexto.Provider value={{favorito, setFavorito}}>
                {children}
            </FavoritoContexto.Provider>
    )    
}
