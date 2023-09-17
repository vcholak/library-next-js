'use client'

import { useState } from 'react'

export default function Author({ authors, selectedId}) {
  const initId = selectedId || null
  const [authorId, setAuthorId] = useState(initId)

  return (
    <>
      <label className='sm:text-end'>Author:</label>
      <select name='author_id' value={authorId} required onChange={e => setAuthorId(e.target.value)}>
        <option>----- select -----</option>
        {authors && authors.map(author => (
          <option key={author.id} value={author.id}>
            {author.first_name}{' '}{author.family_name}
          </option>
        ))}
      </select>
      </>
  )
}