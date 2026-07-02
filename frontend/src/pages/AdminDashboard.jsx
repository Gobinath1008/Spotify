import { useContext, useState } from 'react';
import { Shield, Trash2, Plus, Music, Lock, Eye, EyeOff, X, AlertCircle } from 'lucide-react';
import { SongContext } from '../context/SongContext';

function AdminDashboard() {
  const { songs, addSong, removeSong } = useContext(SongContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSong, setNewSong] = useState({
    name: '',
    desc: '',
    image: '',
    file: '',
    duration: '3:00'
  });
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const ADMIN_PASSWORD = 'password';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleAddSong = (e) => {
    e.preventDefault();
    if (!newSong.name || !newSong.file) {
      setError('Song name and audio URL are required.');
      return;
    }
    addSong({
      name: newSong.name,
      desc: newSong.desc,
      image: newSong.image || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
      file: newSong.file,
      duration: newSong.duration || '3:00'
    });
    setNewSong({ name: '', desc: '', image: '', file: '', duration: '3:00' });
    setShowAddForm(false);
    setError('');
  };

  const handleDelete = (id) => {
    removeSong(id);
    setDeleteConfirm(null);
  };

  // ── Login Screen ──
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="w-full max-w-md">
          {/* Glowing card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1db954] via-[#1ed760] to-[#1db954] rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-[#181818] rounded-2xl p-8 border border-[#282828]">
              {/* Header */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1db954] to-[#148a3c] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1db954]/20">
                  <Shield size={28} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Admin Access</h1>
                <p className="text-[#a7a7a7] text-sm mt-1">Enter your password to continue</p>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm animate-[fadeIn_0.3s_ease]">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleLogin}>
                <div className="relative mb-6">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a7a7a7]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full bg-[#242424] text-white pl-12 pr-12 py-3.5 rounded-lg border border-[#333] focus:border-[#1db954] focus:outline-none focus:ring-1 focus:ring-[#1db954]/50 transition-all placeholder-[#666]"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a7a7a7] hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1db954] to-[#1ed760] text-black font-bold py-3.5 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1db954]/25 active:scale-[0.98] transition-all"
                >
                  Unlock Dashboard
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Admin Dashboard ──
  return (
    <div className="pb-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#1db954] to-[#148a3c] rounded-xl flex items-center justify-center shadow-lg shadow-[#1db954]/20">
            <Shield size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-[#a7a7a7] text-sm">Manage your song library</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#a7a7a7] text-sm bg-[#282828] px-4 py-2 rounded-full">
            <Music size={14} className="inline mr-1.5" />
            {songs.length} songs
          </span>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-gradient-to-r from-[#1db954] to-[#1ed760] text-black font-bold px-5 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#1db954]/25 active:scale-95 transition-all"
          >
            {showAddForm ? <X size={18} /> : <Plus size={18} />}
            {showAddForm ? 'Cancel' : 'Add Song'}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      {/* Add Song Form */}
      {showAddForm && (
        <div className="relative mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1db954] to-[#1ed760] rounded-2xl opacity-20 blur-sm"></div>
          <div className="relative bg-[#181818] rounded-2xl p-6 border border-[#282828]">
            <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Plus size={20} className="text-[#1db954]" />
              Add New Song
            </h2>
            <form onSubmit={handleAddSong} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#a7a7a7] text-xs font-semibold mb-1.5 uppercase tracking-wider">Song Name *</label>
                <input
                  type="text"
                  value={newSong.name}
                  onChange={(e) => setNewSong({ ...newSong, name: e.target.value })}
                  placeholder="e.g. Bohemian Rhapsody"
                  className="w-full bg-[#242424] text-white px-4 py-3 rounded-lg border border-[#333] focus:border-[#1db954] focus:outline-none transition-all placeholder-[#555]"
                />
              </div>
              <div>
                <label className="block text-[#a7a7a7] text-xs font-semibold mb-1.5 uppercase tracking-wider">Description</label>
                <input
                  type="text"
                  value={newSong.desc}
                  onChange={(e) => setNewSong({ ...newSong, desc: e.target.value })}
                  placeholder="e.g. Queen | A Night at the Opera"
                  className="w-full bg-[#242424] text-white px-4 py-3 rounded-lg border border-[#333] focus:border-[#1db954] focus:outline-none transition-all placeholder-[#555]"
                />
              </div>
              <div>
                <label className="block text-[#a7a7a7] text-xs font-semibold mb-1.5 uppercase tracking-wider">Audio URL *</label>
                <input
                  type="text"
                  value={newSong.file}
                  onChange={(e) => setNewSong({ ...newSong, file: e.target.value })}
                  placeholder="https://example.com/song.mp3"
                  className="w-full bg-[#242424] text-white px-4 py-3 rounded-lg border border-[#333] focus:border-[#1db954] focus:outline-none transition-all placeholder-[#555]"
                />
              </div>
              <div>
                <label className="block text-[#a7a7a7] text-xs font-semibold mb-1.5 uppercase tracking-wider">Image URL</label>
                <input
                  type="text"
                  value={newSong.image}
                  onChange={(e) => setNewSong({ ...newSong, image: e.target.value })}
                  placeholder="https://example.com/cover.jpg"
                  className="w-full bg-[#242424] text-white px-4 py-3 rounded-lg border border-[#333] focus:border-[#1db954] focus:outline-none transition-all placeholder-[#555]"
                />
              </div>
              <div className="md:col-span-2 flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#1db954] to-[#1ed760] text-black font-bold px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#1db954]/25 active:scale-95 transition-all"
                >
                  <Plus size={18} />
                  Add Song
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Song List */}
      <div className="bg-[#181818] rounded-2xl border border-[#282828] overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[48px_1fr_1fr_100px_80px] gap-4 px-6 py-3 border-b border-[#282828] text-[#a7a7a7] text-xs font-semibold uppercase tracking-wider">
          <span>#</span>
          <span>Title</span>
          <span>Description</span>
          <span>Duration</span>
          <span className="text-right">Action</span>
        </div>

        {/* Song Rows */}
        {songs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-[#a7a7a7]">
            <Music size={48} className="mb-4 opacity-30" />
            <p className="text-lg font-medium">No songs yet</p>
            <p className="text-sm mt-1">Click "Add Song" to get started</p>
          </div>
        ) : (
          songs.map((song, index) => (
            <div
              key={song.id}
              className="grid grid-cols-[48px_1fr_1fr_100px_80px] gap-4 px-6 py-3 items-center hover:bg-[#282828] transition-colors group border-b border-[#282828]/50 last:border-none"
            >
              <span className="text-[#a7a7a7] text-sm">{index + 1}</span>
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={song.image}
                  alt={song.name}
                  className="w-10 h-10 rounded object-cover flex-shrink-0"
                />
                <span className="text-white font-medium truncate">{song.name}</span>
              </div>
              <span className="text-[#a7a7a7] text-sm truncate">{song.desc}</span>
              <span className="text-[#a7a7a7] text-sm">{song.duration}</span>
              <div className="flex justify-end">
                {deleteConfirm === song.id ? (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleDelete(song.id)}
                      className="text-xs bg-red-500/20 text-red-400 px-2.5 py-1.5 rounded-md hover:bg-red-500/30 transition-colors font-semibold"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="text-xs bg-[#333] text-[#a7a7a7] px-2.5 py-1.5 rounded-md hover:bg-[#444] transition-colors font-semibold"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setDeleteConfirm(song.id)}
                    className="text-[#a7a7a7] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg hover:bg-red-500/10"
                    title="Delete song"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Logout */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => { setIsAuthenticated(false); setPassword(''); }}
          className="text-[#a7a7a7] hover:text-white text-sm font-medium transition-colors hover:underline"
        >
          Lock Dashboard
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
