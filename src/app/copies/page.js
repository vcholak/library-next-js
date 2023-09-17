import Link from "next/link"
import { getBookCopies } from "@/lib/utils"

export default async function BookCopies() {
  const bookCopies = await getBookCopies()
  return (
    <>
      <div className="flex justify-between pt-2">
        <h1 className="ml-2">Book Copy List</h1>
        <Link href='/new-copy' className="rounded-md bg-cyan-500 text-white hover:bg-blue-500 mr-2 p-2">New Book Copy</Link>
      </div>
      <div className="grid justify-items-center">  
        <ul>
          {bookCopies && bookCopies.map(bookCopy => (
            <li key={bookCopy.id}>
              <Link href={`/copies/${bookCopy.id}`} className="hover:text-blue-500">
                {bookCopy.book.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}