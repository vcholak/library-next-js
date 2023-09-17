'use client'

import { useState } from 'react'

export default function Book({ books, selectedId}) {
  const initId = selectedId || null
  const [bookId, setBookId] = useState(initId)

  return (
    <>
      <label className='sm:text-end'>Book:</label>
      <select name='book_id' value={bookId} required onChange={e => setBookId(e.target.value)}>
        <option>----- select -----</option>
        {books && books.map(book => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>
    </>
  )
}