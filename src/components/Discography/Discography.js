import React from 'react'
import "./Discography.scss"
import albums from './DiscoData'




export default function Discography() {
  const handleHover = () =>{

  }

  const albumMap = albums.map((album) => (
    
      <div className='discography-container'>
        <div className='album-container'>
          <img className='album-art' src={album.albumArt} alt="" />
          <p className='album-name'>
            {album.albumName}
          </p>
          <p className='album-artist'>
            {album.artist}
          </p>
        </div>
      </div>
  ))

  return (
    <>
      {albumMap}
    </>
  )
}