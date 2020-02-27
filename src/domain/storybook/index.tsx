import React, { useContext, createContext, useState } from 'react';

type StoryBookType = {
    setStoryBookActive: (active: boolean) => void;
    isStoryBookActive: boolean;
};

export const StoryBookContext = createContext<StoryBookType>({
    setStoryBookActive: () => null,
    isStoryBookActive: false,
});

export const useStoryBook = () => useContext<StoryBookType>(StoryBookContext);

export const StoryBookContextProvider: React.FC = ({ children }) => {
    const [isStoryBookActive, setStoryBookActive] = useState<boolean>(false);
    return (
        <StoryBookContext.Provider
            value={{
                setStoryBookActive,
                isStoryBookActive,
            }}
        >
            {children}
        </StoryBookContext.Provider>
    );
};
