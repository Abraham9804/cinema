import { createContext, useContext, useState } from "react";

export const FavoritoContexto = createContext()

export const FavoritoContextoProvider = ({children}) => {
    const [favorito, setFavorito] = useState([])

    return (
            <FavoritoContexto.Provider value={{favorito, setFavorito}}>
                {children}
            </FavoritoContexto.Provider>
    )    
}

export function useFavoritoContexto(){
    const {favorito, setFavorito} = useContext(FavoritoContexto)

    function agregarFavorito(nuevoFavorito){
        const favoritoRepetido = favorito.some(
            (item) => item.id === nuevoFavorito.id 
        )
        let nuevaLista = [...favorito]
        if(!favoritoRepetido){
            nuevaLista.push(nuevoFavorito)
            return setFavorito(nuevaLista)
        }

        nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id)
        return setFavorito(nuevaLista)
    }
    return {favorito, agregarFavorito}
}