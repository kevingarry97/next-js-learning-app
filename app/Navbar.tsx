'use client';

import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const {status, data: session} = useSession();

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
    <Link href={'/'} className='mr-5'>Next.js</Link>
    <Link href={'/users'}>Users</Link>
    {status == 'authenticated' && <Link href={'/api/auth/signout'}>{session.user?.name}</Link>}
    {status == 'unauthenticated' && <Link href={'/api/auth/signin'}>Login</Link>}
    </div>
  )
}

export default Navbar
