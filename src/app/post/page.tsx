// localhost:3000/post

import Link from "next/link";

const POSTS = Array.from({length:10})

export default function Posts(){
    return (
        <>
         <header className="flex items-center mb-4">
            <h1>Posts</h1>
            <Link className="btn ml-auto" href={'/post/new'}>New Post</Link>
         </header>

         <ul>
            {POSTS.map((_,index)=>(
                <li key={index}>
                    <Link href={`/post/${index}`}>Post - {index}</Link>
                </li>
            ))}
         </ul>
        </>
    )
}