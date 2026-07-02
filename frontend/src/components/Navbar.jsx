import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-spotify-base flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="bg-black/50 p-1 rounded-full text-spotify-light hover:text-white cursor-pointer">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => navigate(1)} className="bg-black/50 p-1 rounded-full text-spotify-light hover:text-white cursor-pointer">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/admin" className="flex items-center gap-1.5 text-spotify-light hover:text-white font-semibold text-sm transition-all hover:scale-105" title="Admin Dashboard">
          <Shield size={16} />
          Admin
        </Link>
        <Link to="/signup" className="text-spotify-light hover:text-white font-semibold text-sm transition-colors">Sign up</Link>
        <Link to="/login" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
