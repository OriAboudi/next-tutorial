// localhost:3000/post/:postId

import PostCard from "@/components/PostCard"
import { getPostById } from "@/services/posts"
import { Post, PostView } from "@/types/posts"
import Link from "next/link"

export function generateMetadata({ params: { postId } }: PostView) {
    return {
        title: `post - ${postId} | Next.js`,
        description: `Post ${postId} description`
    }
}

export function generateStaticParams() {
    return [{ postId: '1' }, { postId: '2' }, { postId: '3' }]
}

export default async function Post({ params: { postId } }: PostView) {
    const post: Post = await getPostById(postId)
    return (
        <>
            <header className="flex items-center ">

                <PostCard {...post} />
                <Link className="btn mx-3 ml-auto " href={`/post/${postId}/edit`} >Edit</Link>
                <button className="btn__red">Delet</button>

            </header>
        </>
    )
}