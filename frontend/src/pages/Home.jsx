import { useContext } from 'react';
import { Play } from 'lucide-react';
import { PlayerContext } from '../context/PlayerContext';
import { SongContext } from '../context/SongContext';

const SongItem = ({ name, desc, image, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div onClick={() => playWithId(id)} className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors group cursor-pointer relative">
      <div className="relative mb-4">
        <img src={image} alt={name} className="rounded-md w-full aspect-square object-cover shadow-lg" />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-spotify rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl hover:scale-105 hover:bg-spotify-dark">
          <Play fill="black" size={24} className="ml-1" />
        </button>
      </div>
      <h3 className="text-white font-bold mb-1 truncate">{name}</h3>
      <p className="text-spotify-light text-sm line-clamp-2">{desc}</p>
    </div>
  );
};

function Home() {
  const { songs } = useContext(SongContext);
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">Songs</h2>
        <span className="text-spotify-light text-sm font-bold hover:underline cursor-pointer">Show all</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {songs.map((song, index) => (
          <SongItem key={index} name={song.name} desc={song.desc} id={song.id} image={song.image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
