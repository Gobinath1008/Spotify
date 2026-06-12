
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup and redirect
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full pb-10">
      <div className="bg-black/50 p-8 rounded-xl w-full max-w-md shadow-2xl border border-[#282828] backdrop-blur-md">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Sign up to start listening</h2>
        
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <div>
            <label className="text-white font-bold text-sm block mb-2">Email address</label>
            <input 
              type="email" 
              required
              placeholder="name@domain.com" 
              className="w-full bg-[#121212] border border-[#727272] text-white p-3 rounded-md hover:border-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="text-white font-bold text-sm block mb-2">Create a password</label>
            <input 
              type="password" 
              required
              placeholder="Create a password" 
              className="w-full bg-[#121212] border border-[#727272] text-white p-3 rounded-md hover:border-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="text-white font-bold text-sm block mb-2">What should we call you?</label>
            <input 
              type="text" 
              required
              placeholder="Enter a profile name" 
              className="w-full bg-[#121212] border border-[#727272] text-white p-3 rounded-md hover:border-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
            />
            <p className="text-xs text-spotify-light mt-1">This appears on your profile.</p>
          </div>

          <button type="submit" className="bg-spotify text-black font-bold py-3.5 rounded-full w-full mt-4 hover:scale-105 hover:bg-spotify-dark transition-all">
            Sign Up
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-[#282828] text-center">
          <p className="text-spotify-light font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-white hover:underline hover:text-spotify">
              Log in here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
