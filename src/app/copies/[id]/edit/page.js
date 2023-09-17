import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getBooks, getBookCopy } from "@/lib/utils"
import Book from '@/components/book'
import BookCopyStatus from '@/components/status'

export default async function UpdateBookCopyForm({params}) {
  const id = params.id
  const bookCopy = await getBookCopy(id)
  console.log('bookCopy:', bookCopy)
  const dueDate = bookCopy.due_date ? bookCopy.due_date.split('T')[0] : ''

  const books = await getBooks()

  async function updateBookCopy(formData) {
    'use server'

    const str = formData.get('due_date') // can be ''
    const dueDate = str ? new Date(str) : null

    const payload = {
      book_id: parseInt(formData.get('book_id')),
      imprint: formData.get('imprint'),
      due_date: dueDate,
      status: parseInt(formData.get('status'))
    }
    console.log('UpdateBookCopy payload:', payload)

    const resp = await fetch('http://localhost:8080/api/copies/'+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      console.log('status:', resp.status, 'statusText:', resp.statusText)
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to update BookCopy')
    }
    const bookCopy = await resp.json()
    console.log('bookCopy:', bookCopy)

    revalidatePath('/copies')
    redirect('/copies')
  }

  return (
    <div>
      <h1 className='text-center m-2'>Update Book Copy</h1>
      <form action={updateBookCopy}>
        <div className="grid grid-cols-2 gap-3">
          <Book books={books} selectedId={bookCopy.book.id} />

          <label className='sm:text-end'>Imprint:</label>
          <input type="text" name="imprint" required defaultValue={bookCopy.imprint} />

          <BookCopyStatus selectedId={bookCopy.status} />
          
          <label className='sm:text-end'>Due Date:</label>
          <input type="date" name="due_date" defaultValue={dueDate} />
        </div>
        <div className='text-center'>
          <button type="submit" 
          className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Update</button>
        </div>
      </form>
    </div>
  )
}