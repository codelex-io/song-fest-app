import React, { useContext, createContext, useState } from 'react';
import { GroupOfFavourites, Favourite } from './types';
import { toggleFavourite, getFavourites, isFavourite } from './index';

type ContextType = {
    toggleFavourite: (fav: Favourite) => void;
    isFavourite: (fav: Favourite) => boolean;
    favourites: GroupOfFavourites[];
};

export const FavouritesContext = createContext<ContextType>({
    toggleFavourite: () => null,
    isFavourite: () => false,
    favourites: [],
});
export const useFavourites = () => useContext<ContextType>(FavouritesContext);

export const FavouritesContextProvider: React.FC = ({ children }) => {
    const [favourites, setFavourites] = useState<GroupOfFavourites[]>([]);
    return (
        <FavouritesContext.Provider
            value={{
                toggleFavourite: (fav: Favourite) => {
                    toggleFavourite(fav);
                    setFavourites([...getFavourites()]);
                },
                isFavourite,
                favourites,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};
