import React, { useRef, useState } from 'react'
import './Videoplayer.css'
import video from '../../assets/tailoring.mp4'

const Videoplayer = ({playstate, setplaystate}) => {

  const player = useRef(null);

  const closeplayer =(e)=>{
    if(e.target===player.current){
      setplaystate(false);
    }
  }

  return (
    <div className={`videoplayer ${playstate ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer