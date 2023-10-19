// localhost:3000/post

import Link from "next/link";
import PostCard from "../components/PostCard";

export const metadata = {
    title: "Posts View| Next.js",
    description:"posts view description"
}

const POSTS = Array.from({ length: 140 })

export default function Posts() {
    return (
        <>
            <header className="flex items-center mb-4">
                <h1>Posts</h1>
                <Link className="btn ml-auto" href={'/post/new'}>New Post</Link>

            </header>
            <ul className="grid grid-cols-3 gap-3  ">
                {POSTS.map((_, index) => (

                    <PostCard key={index} postId={index.toString()} />

                ))}
            </ul>

        </>
    )
}