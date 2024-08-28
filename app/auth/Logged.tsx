'use client'

import Image from 'next/image'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Logged() {
  return (
    <li className='flex gap-8 items-center'>
      <button>Sign Out</button>
    </li>
  )
}