import React, { useEffect, useState } from 'react'
import { getGifs } from '../api'

const Game = () => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs().then(gifs => setGifs(gifs))
    }, [])
    console.log(gifs)

  return (
    <div>Game</div>
  )
}

export default Game