// localhost:3000/post/new
export const metadata={
    title: "New Post | Next.js",
    description:"new post description"
}
import PostForm from "../../../components/PostForm";

export default function NewPost() {
    return (
        <>
            <div>new post </div>
            <PostForm/>
        </>
    )
}