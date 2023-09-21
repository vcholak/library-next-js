export default async function Home() {
  
  const booksCnt = await booksCount()
  const copiesCnt = await copiesCount()
  const availableCopiesCnt = await availableCopiesCount()
  const authorsCnt =  await authorsCount()
  const genresCnt = await genresCount()
  return (
    <div className="grid justify-items-center">
      <h1 className='text-3xl font-bold text-green-500'>Local Library</h1>
      <p>The Library has the following record counts:</p>
      <ul>
        <li><strong>Books: </strong>{booksCnt}</li>
        <li><strong>Book Copies: </strong>{copiesCnt}</li>
        <li><strong>Available Book Copies: </strong>{availableCopiesCnt}</li>
        <li><strong>Authors: </strong>{authorsCnt}</li>
        <li><strong>Genres: </strong>{genresCnt}</li>
      </ul>
    </div>
  )
}

async function authorsCount() {
  const resp = await fetch('http://localhost:8080/api/authors', {
    method: "HEAD"
  })

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch authors count')
  }
  return resp.headers.get('x-result-count')
}

async function booksCount() {
  const resp = await fetch('http://localhost:8080/api/books', {
    method: "HEAD"
  })

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch books count')
  }
  return resp.headers.get('x-result-count')
}

async function copiesCount() {
  const resp = await fetch('http://localhost:8080/api/copies', {
    method: "HEAD"
  })

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch book copies count')
  }
  return resp.headers.get('x-result-count')
}

async function availableCopiesCount() {
  const resp = await fetch('http://localhost:8080/api/copies/available', {
    method: "HEAD"
  })

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch book copies count')
  }
  return resp.headers.get('x-result-count')
}

async function genresCount() {
  const resp = await fetch('http://localhost:8080/api/genres', {
    method: "HEAD"
  })

  if (!resp.ok) {
    console.log('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch genres count')
  }
  return resp.headers.get('x-result-count')
}