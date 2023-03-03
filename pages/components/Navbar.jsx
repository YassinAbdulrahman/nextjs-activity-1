import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
       <Link href="/">Home</Link>
       <Link href="/about">About</Link>
       <Link href="/posts">Posts</Link>
    </nav>
  )
}

export default Navbar