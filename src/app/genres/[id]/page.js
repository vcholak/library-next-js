import Link from "next/link"
import { getGenre } from "@/lib/utils"

export default async function GenreDetails({params}) {
  const id = params.id
  const genre = await getGenre(id)

  return (
    <>
      <h1 className='text-center m-2'>Genre Details</h1>
      <p className=" text-center mb-2">
        <span className="underline">
          {genre.name}
        </span>
      </p>
      <div className='text-center'>
        <Link href={`/genres/${id}/edit`} className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Edit</Link>
      </div>
    </>
  )
}