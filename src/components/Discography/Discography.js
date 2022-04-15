import React from 'react'
import "./Discography.scss"
import { albumMap, selectors } from '../AlbumMapping/AlbumData'
import albums from './DiscoData'

export default function Discography() {
  
  
const artistFilter = albums.filter(album => album.artist==="Lil Wayne").map(object => (
  object
  ))
   const filterMap = artistFilter.map((album) => (
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
  

// console.log(artistFilter)

  return (
    <>
      {selectors}
      {/* {filterMap} */}
      {albumMap}
    </>
  )
}