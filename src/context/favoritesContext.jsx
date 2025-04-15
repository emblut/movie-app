import { useState, createContext, useContext } from 'react'

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {

    //Listan med favoriterna, plus funktionen som påverkar listan (lägger till och tar bort filmer)
    const [favorites, setFavorites] = useState([]);

    const addFavorite = () => {
        //lägg till favoritfilm funtion här
    }

    const removeFavorite = () => {
        //ta bort favoritfilm funtion här
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
};

export const useFavorites = () => useContext(FavoritesContext);