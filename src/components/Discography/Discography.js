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

  const series = albums.map((album) => (
    album.series
  ))


  const artistsDeduped = Array.from(new Set(artists)).map((artist) => (
    <option value={artist}>{artist}</option>
  ));

  const genresDeduped = Array.from(new Set(genres)).map(genre => (
    <option value={genre}>{genre}</option>
  ) 
  )

  const seriesDeduped = Array.from(new Set(series)).map((set) => (
    <option value={set}>{set}</option>
  ))



  return (
    <>
      <div>
        <select name="artist" id="artist">
          <option value="artist-default" selected>Artists</option>
          {artistsDeduped}
        </select>
        <select name="artist" id="artist">
          <option value="genre-default" selected>Genre</option>
          {genresDeduped}
        </select>
        <select>
          <option value="series-default" selected>Series</option>
          {seriesDeduped}
        </select>
      </div>
      {albumMap}
    </>
  )
}