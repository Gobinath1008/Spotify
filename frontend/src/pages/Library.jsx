import { useContext } from 'react';
import { Play } from 'lucide-react';
import { SongContext } from '../context/SongContext';
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({ name, desc, image, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div onClick={() => playWithId(id)} className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors group cursor-pointer relative flex items-center gap-4">
      <img src={image} alt={name} className="rounded-md w-16 h-16 aspect-square object-cover shadow-lg" />
      <div className="flex-1">
        <h3 className="text-white font-bold mb-1 truncate">{name}</h3>
        <p className="text-spotify-light text-sm line-clamp-2">{desc}</p>
      </div>
      <button className="w-12 h-12 bg-spotify rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all shadow-xl hover:scale-105 hover:bg-spotify-dark">
        <Play fill="black" size={24} className="ml-1" />
      </button>
    </div>
  );
};

function Library() {
  const { songs } = useContext(SongContext);
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Your Library</h2>
      </div>
      
      <div className="flex flex-col gap-2">
        {songs.map((song, index) => (
          <SongItem key={index} name={song.name} desc={song.desc} id={song.id} image={song.image} />
        ))}
      </div>
    </div>
  );
}

export default Library;
