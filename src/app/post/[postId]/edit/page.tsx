import PostForm from "@/app/components/PostForm"

// localhost:3000/post/:postId/edit
interface PostEdit {
    params:{
        postId: string
    }
}
export default function EditPost(props: PostEdit) {
    return (
        <>
            <div>edit post - {props.params.postId}</div>
            <PostForm/>
        </>
    )
}