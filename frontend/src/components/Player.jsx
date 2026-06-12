import { useContext } from 'react';
import { PlayCircle, PauseCircle, SkipBack, SkipForward, Shuffle, Repeat, Volume2 } from 'lucide-react';
import { PlayerContext } from '../context/PlayerContext';

function Player() {
  const { track, seekBar, seekBg, volBg, volBar, playStatus, play, pause, time, previous, next, seekSong, seekVolume } = useContext(PlayerContext);

  return (
    <div className="h-24 bg-[#181818] border-t border-[#282828] flex items-center justify-between px-4">
      {/* Left */}
      <div className="flex items-center gap-4 w-[30%]">
        <img 
          src={track.image} 
          alt="Album art" 
          className="h-14 w-14 rounded-md"
        />
        <div>
          <h4 className="text-sm text-white font-semibold cursor-pointer hover:underline">{track.name}</h4>
          <p className="text-xs text-spotify-light cursor-pointer hover:underline">{track.desc.slice(0, 20)}</p>
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center max-w-[40%] w-full gap-2">
        <div className="flex items-center gap-6 text-spotify-light">
          <Shuffle size={20} className="hover:text-white cursor-pointer" />
          <SkipBack onClick={previous} size={20} className="hover:text-white cursor-pointer" />
          {playStatus
            ? <PauseCircle onClick={pause} size={36} className="text-white hover:scale-105 transition-transform cursor-pointer" />
            : <PlayCircle onClick={play} size={36} className="text-white hover:scale-105 transition-transform cursor-pointer" />
          }
          <SkipForward onClick={next} size={20} className="hover:text-white cursor-pointer" />
          <Repeat size={20} className="hover:text-white cursor-pointer" />
        </div>
        <div className="w-full flex items-center gap-2 text-xs text-spotify-light">
          <span>{time.currentTime.minute}:{time.currentTime.second < 10 ? '0' : ''}{time.currentTime.second}</span>
          <div ref={seekBg} onClick={seekSong} className="h-1 rounded-full w-full bg-[#4d4d4d] flex items-center group cursor-pointer">
            <div ref={seekBar} className="h-full bg-white rounded-full w-0 group-hover:bg-spotify relative"></div>
          </div>
          <span>{time.totalTime.minute}:{time.totalTime.second < 10 ? '0' : ''}{time.totalTime.second}</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end gap-3 w-[30%] text-spotify-light">
        <Volume2 size={20} className="cursor-pointer hover:text-white" />
        <div ref={volBg} onClick={seekVolume} className="h-1 rounded-full w-24 bg-[#4d4d4d] flex items-center group cursor-pointer">
          <div ref={volBar} className="h-full bg-white rounded-full w-[100%] group-hover:bg-spotify"></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
