import React, { useState, useEffect } from "react";
import { BsPlay } from "react-icons/bs";
import { BsPause } from "react-icons/bs";


const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const MyPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <span 
      className="text-white"
        onClick={toggle}>{playing ? "Pause" : "Play"}
        {
          playing
            ?
            <BsPause className="text-white ml-2" size={25} />
            :
            <BsPlay className="text-white ml-2" size={25} />            
        }
      </span>
    </div>
  );
};

export default MyPlayer;
