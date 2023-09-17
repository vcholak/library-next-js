import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getBooks } from "@/lib/utils"
import Book from '@/components/book'
import BookCopyStatus from '@/components/status'

export default async function BookCopyForm() {
  const books = await getBooks()

  async function createBookCopy(formData) {
    'use server'

    const payload = {
      book_id: parseInt(formData.get('book_id')),
      imprint: formData.get('imprint'),
      due_date: new Date(formData.get('due_date')),
      status: parseInt(formData.get('status'))
    }
    console.log('pyload:', payload)

    const resp = await fetch('http://localhost:8080/api/copies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      console.log('status:', resp.status, 'statusText:', resp.statusText)
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to create BookCopy')
    }
    const bookCopy = await resp.json()
    console.log('bookCopy:', bookCopy)

    revalidatePath('/copies')
    redirect('/copies')
  }

  return (
    <div>
      <h1 className='text-center m-2'>New Book Copy</h1>
      <form action={createBookCopy}>
        <div className="grid grid-cols-2 gap-3">
          <Book books={books} />

          <label className='sm:text-end'>Imprint:</label>
          <input type="text" name="imprint" required />

          <BookCopyStatus />
          
          <label className='sm:text-end'>Due Date:</label>
          <input type="date" name="due_date" required />
        </div>
        <div className='text-center'>
          <button type="submit" 
          className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Create</button>
        </div>
      </form>
    </div>
  )
}