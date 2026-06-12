
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-black flex flex-col h-full p-6 text-sm font-semibold">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-spotify text-3xl">Spotify</span>
        </h1>
      </div>

      <div className="flex flex-col gap-4 text-spotify-light mb-8">
        <Link to="/" className="flex items-center gap-4 hover:text-white transition-colors">
          <Home size={24} />
          Home
        </Link>
        <Link to="/search" className="flex items-center gap-4 hover:text-white transition-colors">
          <Search size={24} />
          Search
        </Link>
        <Link to="/library" className="flex items-center gap-4 hover:text-white transition-colors">
          <Library size={24} />
          Your Library
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-spotify-light mt-6">
        <button className="flex items-center gap-4 hover:text-white transition-colors">
          <div className="bg-spotify-light text-black p-1 rounded-sm"><PlusSquare size={16} /></div>
          Create Playlist
        </button>
        <button className="flex items-center gap-4 hover:text-white transition-colors">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-300 text-white p-1 rounded-sm"><Heart size={16} /></div>
          Liked Songs
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
