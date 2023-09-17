import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function GenreForm() {

  async function createGenre(formData) {
    'use server'

    const payload = {
      name: formData.get('name')
    }

    const resp = await fetch('http://localhost:8080/api/genres', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      console.log('status:', resp.status, 'statusText:', resp.statusText)
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to create Genre')
    }
    const genre = await resp.json()

    revalidatePath('/genres')
    redirect('/genres')
  }

  return (
    <div>
      <h1 className='text-center m-2'>New Genre</h1>
      <form action={createGenre}>
        <div className="grid grid-cols-2 gap-3">
          <label className='sm:text-end'>Name:</label>
          <input type='text' name='name' required />
        </div>
        <div className='text-center'>
          <button type="submit" 
          className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Create</button>
        </div>
      </form>
    </div>
  )
}