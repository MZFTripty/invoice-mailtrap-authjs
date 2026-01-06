
import { signOut } from '@/app/utils/auth'
import { requireUser } from '@/app/utils/hooks'
import React from 'react'

export default async function DashBoard() {
    const session = await requireUser()
  return (
    <div>
      <h1>Dashboard</h1>
       <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
    </div>
  )
}
