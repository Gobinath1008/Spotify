
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and redirect
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full pb-20">
      <div className="bg-black/50 p-8 rounded-xl w-full max-w-md shadow-2xl border border-[#282828] backdrop-blur-md">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Log in to Spotify</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="text-white font-bold text-sm block mb-2">Email or username</label>
            <input 
              type="text" 
              required
              placeholder="Email or username" 
              className="w-full bg-[#121212] border border-[#727272] text-white p-3 rounded-md hover:border-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="text-white font-bold text-sm block mb-2">Password</label>
            <input 
              type="password" 
              required
              placeholder="Password" 
              className="w-full bg-[#121212] border border-[#727272] text-white p-3 rounded-md hover:border-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
            />
          </div>

          <button type="submit" className="bg-spotify text-black font-bold py-3.5 rounded-full w-full mt-4 hover:scale-105 hover:bg-spotify-dark transition-all">
            Log In
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-[#282828] text-center">
          <p className="text-spotify-light font-medium">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white hover:underline hover:text-spotify">
              Sign up for Spotify
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
