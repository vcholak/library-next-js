'use client'

import { useState } from 'react'
import { getBookCopyStatuses } from '@/lib/utils'

export default function BookCopyStatus({selectedId}) {
  const statuses = getBookCopyStatuses()

  const initId = selectedId || null
  const [statusId, setStatusId] = useState(initId)

  return (
    <>
      <label className='sm:text-end'>Status:</label>
      <select name='status' value={statusId} required onChange={e => setStatusId(e.target.value)}>
        <option>----- select -----</option>
        {statuses.map((status, index) => (
          <option key={index} value={index}>
            {status}
          </option>
        ))}
      </select>
    </> 
  )
}