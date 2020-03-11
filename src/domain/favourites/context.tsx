import React, { useContext, createContext, useState } from 'react';
import { GroupOfFavourites, Favourite } from './types';
import { toggleFavourite, getFavourites, isFavourite, hasAnyItems } from './index';

type ContextType = {
    toggleFavourite: (fav: Favourite) => void;
    isFavourite: (fav: Favourite) => boolean;
    favourites: GroupOfFavourites[];
    hasAnyItems: () => boolean;
};

export const FavouritesContext = createContext<ContextType>({
    toggleFavourite: () => null,
    isFavourite: () => false,
    favourites: [],
    hasAnyItems: () => false,
});

export const useFavourites = () => useContext<ContextType>(FavouritesContext);

export const FavouritesContextProvider: React.FC = ({ children }) => {
    const [favourites, setFavourites] = useState<GroupOfFavourites[]>([...getFavourites()]);
    return (
        <FavouritesContext.Provider
            value={{
                toggleFavourite: (fav: Favourite) => {
                    toggleFavourite(fav);
                    setFavourites([...getFavourites()]);
                },
                isFavourite,
                favourites,
                hasAnyItems,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};
