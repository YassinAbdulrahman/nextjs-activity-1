import Link from 'next/link';
import React from 'react'
function posts({posts}) {
  return (
    <div>
       {posts.posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1> 
          <Link href={`posts/${post.id}`}><span>Read More</span></Link> 
        </div> 
      ))}
    </div>
  )
}

export async function getStaticProps() {
    const data = await fetch('https://dummyjson.com/posts');
    const posts = await data.json();
    
    return {
      props: {
        posts ,
      }, // will be passed to the page component as props
    }
}

export default posts