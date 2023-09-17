export async function getAuthors() {
  const resp = await fetch('http://localhost:8080/api/authors')

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch authors')
  }

  const authors = await resp.json()
  return authors
}

export async function getGenres() {
  const resp = await fetch('http://localhost:8080/api/genres')

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch genres')
  }

  const genres = await resp.json()
  return genres
}

export async function getBooks() {
  const resp = await fetch('http://localhost:8080/api/books')

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch books')
  }

  const books = await resp.json()
  return books
}

export async function getBookCopies() {
  const resp = await fetch('http://localhost:8080/api/copies')

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch books')
  }

  const copies = await resp.json()
  return copies
}

export async function getAuthor(id) {
  const resp = await fetch('http://localhost:8080/api/authors/'+id)

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Author')
  }

  const author = await resp.json()
  return author
}

export async function getBook(id) {
  const resp = await fetch('http://localhost:8080/api/books/'+id)

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Book')
  }

  const book = await resp.json()
  return book
}

export async function getGenre(id) {
  const resp = await fetch('http://localhost:8080/api/genres/'+id)

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Genre')
  }

  const genre = await resp.json()
  return genre
}

export async function getBookCopy(id) {
  const resp = await fetch('http://localhost:8080/api/copies/'+id)

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch BookCopy')
  }

  const bookCopy = await resp.json()
  return bookCopy
}

export function getBookCopyStatuses() {
  return [
    "NotAvailable",
    "OnOrder",
    "InTransit",
    "OnHold",
    "OnLoan",
    "InLibrary"
  ]
}