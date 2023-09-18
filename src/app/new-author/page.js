import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function AuthorForm() {

  async function createAuthor(formData) {
    'use server'

    const birthDate = new Date(formData.get('birth_date'))
    const str = formData.get('death_date') // can be ''
    const deathDate = str ? new Date(str) : null

    const payload = {
      first_name: formData.get('first_name'),
      family_name: formData.get('family_name'),
      birth_date: birthDate,
      death_date: deathDate,
      life_span: formData.get('life_span')
    }
    console.log('payload:', payload)

    const resp = await fetch('http://localhost:8080/api/authors', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      console.log('status:', resp.status, 'statusText:', resp.statusText)
      throw new Error('Failed to create Author')
    }
    const author = await resp.json()

    revalidatePath('/authors')
    redirect('/authors')
  }
  return (
    <div>
      <h1 className='text-center m-2'>New Author</h1>
      <form action={createAuthor}>
        <div className="grid grid-cols-2 gap-3">
          <label className='sm:text-end'>First Name:</label>
          <input type="text" name="first_name" required />

          <label className='sm:text-end'>Family Name:</label>
          <input type="text" name="family_name" required />

          <label className='sm:text-end'>Birth Date:</label>
          <input type="date" name="birth_date" required />

          <label className='sm:text-end'>Death Date:</label>
          <input type="date" name="death_date" />

          <label className='sm:text-end'>Life Span:</label>
          <textarea name='life_span' rows={20} cols={50} required />
        </div>
        <div className='text-center'>
          <button type="submit" 
          className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Create</button>
        </div>
      </form>
    </div>
  )
}