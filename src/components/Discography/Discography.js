import React from 'react'
import "./Discography.scss"
import albums from './DiscoData'




export default function Discography() {


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

  const artists = albums.map((album) => (
    album.artist
  ))

  const genres = albums.map((album) => (
    album.genre
  ))

  const genresDeduped = Array.from(new Set(genres)).map((genre) =>(
    <option value={genre}>{genre}</option>
  ))

  const artistsDeduped = Array.from(new Set(artists)).map((artist) =>(
    <option value={artist}>{artist}</option>
  ));


  return (
    <>
      <div>
        <select name="artist" id="artist">
          {artistsDeduped}
        </select>
        <select name="artist" id="artist">
          {genresDeduped}
        </select>
      </div>
      {albumMap}
    </>
  )
}