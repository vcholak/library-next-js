import Link from "next/link"
import { getGenres } from "@/lib/utils"

export default async function Genres() {
  const genres = await getGenres()

  return (
    <>
      <div className="flex justify-between pt-2">
        <h1 className="ml-2">Genre List</h1>
        <Link href='/new-genre' className="rounded-md bg-cyan-500 text-white hover:bg-blue-500 mr-2 p-2">New Genre</Link>
      </div>
      <div className="grid justify-items-center">
        <ul>
          {genres && genres.map(genre => (
            <li key={genre.id}>
              <Link href={`/genres/${genre.id}`} className="hover:text-blue-500">{genre.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}