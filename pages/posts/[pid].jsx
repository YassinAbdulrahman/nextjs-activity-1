import React from 'react'


function postPage({post}) {
  return (
    <>
        <div  key={post.id}>
          <h1>{post.title}</h1> 
          <p>{post.body}</p>
        </div> 
    </>
  )
}
export async function getStaticPaths() {
    const data = await fetch('https://dummyjson.com/posts');
    const posts = await data.json();

    const paths = posts.posts.map((post) => {
     return{
        params: {
            pid : String(post.id) 
        },
     };
    });
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  export async function getStaticProps({params}) {
    const id = params.id
    const data = await fetch('https://dummyjson.com/posts/'+ params.pid );
    const post = await data.json();

    return {
        props: {
          post,
        },
      }
  }
export default postPage