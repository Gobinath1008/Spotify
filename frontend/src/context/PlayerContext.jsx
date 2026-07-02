/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { SongContext } from "./SongContext";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const volBg = useRef();
    const volBar = useRef();

    const { songs, addSong, removeSong } = useContext(SongContext);
  const [track, setTrack] = useState(songs[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songs[id]);
        setTimeout(() => {
            audioRef.current.play();
            setPlayStatus(true);
        }, 50);
    }

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songs[track.id - 1]);
            setTimeout(() => {
                audioRef.current.play();
                setPlayStatus(true);
            }, 50);
        }
    }

    const next = async () => {
        if (track.id < songs.length - 1) {
            await setTrack(songs[track.id + 1]);
            setTimeout(() => {
                audioRef.current.play();
                setPlayStatus(true);
            }, 50);
        }
    }

    const seekSong = async (e) => {
        if (audioRef.current.duration) {
            audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
        }
    }

    const seekVolume = (e) => {
        let volume = e.nativeEvent.offsetX / volBg.current.offsetWidth;
        if (volume < 0) volume = 0;
        if (volume > 1) volume = 1;
        audioRef.current.volume = volume;
        volBar.current.style.width = (volume * 100) + "%";
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                if (!isNaN(audioRef.current.duration)) {
                    seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                    setTime({
                        currentTime: {
                            second: Math.floor(audioRef.current.currentTime % 60),
                            minute: Math.floor(audioRef.current.currentTime / 60)
                        },
                        totalTime: {
                            second: Math.floor(audioRef.current.duration % 60),
                            minute: Math.floor(audioRef.current.duration / 60)
                        }
                    })
                }
            }
        }, 1000);
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        volBg,
        volBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous, next,
        seekSong,
        seekVolume
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider;
