import albums from "../Discography/DiscoData";

export const albumMap = albums.map((album) => (
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

export const artists = albums.map((album) => (
  album.artist
))

export const genres = albums.map((album) => (
  album.genre
))

export const series = albums.map((album) => (
  album.series
))

export const artistsDeduped = Array.from(new Set(artists)).map((artist) => (
  <option defaultValue={artist}>{artist}</option>
));

export const genresDeduped = Array.from(new Set(genres)).map(genre => (
  <option defaultValue={genre}>{genre}</option>
)
)

export const seriesDeduped = Array.from(new Set(series)).map((set) => (
  <option defaultValue={set}>{set}</option>
))

export const selectors =
  <div>
    <select name="artist" id="artist">
      <option defaultValue="artist-default" selected>All Artists</option>
      {artistsDeduped}
    </select>
    <select name="genre" id="genre">
      <option defaultValue="genre-default" selected>All Genres</option>
      {genresDeduped}
    </select>
    <select>
      <option defaultValue="series-default" selected>All Series</option>
      {seriesDeduped}
    </select>
  </div>