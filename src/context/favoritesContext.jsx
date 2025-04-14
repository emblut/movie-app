import { useSatate, createContext, useContext } from 'react'

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {

    //Listan med favoriterna, plus funktionen som påverkar listan (lägger till och tar bort filmer)
    const [favorites, setFavorites] = useState([]);

    //Här behöver vi funktionerna addFavorites och removeFavorites, 
    // som använder sig av setFavorites, en som lägger till och en som tar bort ur favoritlistan.

    return (
        <FavoritesContext.Provider value={ favorites }>
            {children}
        </FavoritesContext.Provider>
    )
};

export const useFavorites = () => useContext(FavoritesContext);