import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getBook, getAuthors, getGenres } from "@/lib/utils"
import Author from "@/components/author"
import Genre from "@/components/genre"

export default async function UpdateBookForm({params}) {

  const id = params.id
  const book = await getBook(id)

  const authors = await getAuthors()
  const genres = await getGenres()

  async function updateBook(formData) {
    'use server'

    const payload = {
      title: formData.get('title'),
      author_id: parseInt(formData.get('author_id')),
      genre_id: parseInt(formData.get('genre_id')),
      summary: formData.get('summary'),
      isbn: formData.get('isbn')
    }

    const resp = await fetch('http://localhost:8080/api/books/'+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      console.log('status:', resp.status, 'statusText:', resp.statusText)
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to update Book')
    }
    const book = await resp.json()
    console.log('book:', book)

    revalidatePath('/books')
    redirect('/books')
  }

  return (
    <div>
      <h1 className='text-center m-2'>Update Book</h1>
      <form action={updateBook}>
        <div className="grid grid-cols-2 gap-3">
          <label className='sm:text-end'>Title:</label>
          <input type="text" name="title" required defaultValue={book.title} />
          
          <Author authors={authors} selectedId={book.author.id} />
          <Genre genres={genres} selectedId={book.genre.id} />

          <label className='sm:text-end'>Summary:</label>
          <textarea name="summary" rows={10} cols={50} required defaultValue={book.summary} />
          
          <label className='sm:text-end'>ISBN:</label>
          <input type="text" name="isbn" required defaultValue={book.isbn} />
        </div>
        <div className='text-center'>
          <button type="submit" className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>
            Update
          </button>
        </div>
      </form>
    </div>
  )
}