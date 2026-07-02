import { createContext, useContext, useState } from 'react';
import { songsData } from '../assets/assets';

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [songs, setSongs] = useState(songsData);

  const addSong = (song) => {
    setSongs((prev) => [...prev, { id: prev.length, ...song }]);
  };

  const removeSong = (id) => {
    setSongs((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <SongContext.Provider value={{ songs, addSong, removeSong }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongContext = () => useContext(SongContext);
