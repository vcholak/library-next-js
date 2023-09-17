'use client'

import { useState } from 'react'

export default function Genre({ genres, selectedId}) {
  const initId = selectedId || null
  const [genreId, setGenreId] = useState(initId)

  return (
    <>
      <label className='sm:text-end'>Genre:</label>
      <select name='genre_id' value={genreId} required onChange={e => setGenreId(e.target.value)}>
        <option>----- select -----</option>
        {genres && genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </>
  )
}