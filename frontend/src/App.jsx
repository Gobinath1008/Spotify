import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { PlayerContext } from './context/PlayerContext'

function App() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <Router>
      <div className="h-screen flex flex-col bg-spotify-base text-white overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto">
            <Navbar />
            <main className="p-6 h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
          </div>
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
    </Router>
  )
}

export default App
