// localhost:3000/post

import Link from "next/link";
import PostCard from "@/components/PostCard";
import {Post} from "@/types/posts"
import {getPosts} from "@/services/posts"



export const metadata = {
    title: "Posts View| Next.js",
    description:"posts view description"
}

export default async  function Posts() {
    const posts:[Post]  = await getPosts()
  
    return (
        <>
            <header className="flex items-center mb-4">
                <h1>Posts</h1>
                <Link className="btn ml-auto" href={'/post/new'}>New Post</Link>

            </header>
            <ul className="grid grid-cols-3 gap-3  ">
                {posts.map((post) => (

                    <PostCard key={post.id} {...post} />

                ))}
            </ul>

        </>
    )
}