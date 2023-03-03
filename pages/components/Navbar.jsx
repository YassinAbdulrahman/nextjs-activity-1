import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
       <Link href="/">Home</Link>
       <Link href="/about">About</Link>
       <Link href="/posts">Posts</Link>
    </div>
  )
}

export default Navbar