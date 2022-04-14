import React from 'react'
import "./Discography.scss"
import albums from './DiscoData'




export default function Discography() {
  const handleHover = () => {

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
  ));

  const artistMap = albums.map((album) => (
    <option value={album.artist}>{album.artist}</option>
  ))


  return (
    <>
      <div>
        <select name="genre" id="genre">
          {artistMap}
        </select>
        <select name="artist" id="artist">
          {albumMap}
          <option value="Artist" selected>Artist</option>
          <option value></option>
          <option value="reggae">Reggae</option>
          <option value="hip hop">Hip Hop</option>
        </select>
      </div>
      {albumMap}
    </>
  )
}