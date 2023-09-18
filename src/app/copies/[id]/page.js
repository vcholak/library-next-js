import Link from "next/link"
import { getBookCopy, getBookCopyStatuses } from "@/lib/utils"
import FormattedDate from '@/components/date'

export default async function BookCopyDetails({params}) {
  const id = params.id
  const bookCopy = await getBookCopy(id)
  console.log('bookCopy:', bookCopy)

  const dueDate = bookCopy.due_date?.split('T')[0]
  const book = bookCopy.book
  const author = book.author
  const statuses = getBookCopyStatuses()
  
  return (
    <div className='text-center'>
      <h1 className='text-center m-2'>Book Copy Details</h1>
      <p className="">
        <span>Title: </span>
        {book.title}
      </p>
      <p>
        <span>Author: </span>
        {author.first_name}{' '}{author.family_name}
      </p>
      <p>
        <span>Imprint: </span>
        {bookCopy.imprint}
      </p>
      <p>
        <span>Status: </span>
        {statuses[bookCopy.status]}
      </p>
      {bookCopy.status !== 5 &&
        <p>
          <span>Due Date: </span>
          <FormattedDate dateString={dueDate} />
        </p>
      }
      <Link href={`/copies/${id}/edit`} className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Edit</Link>
    </div>
  )
}