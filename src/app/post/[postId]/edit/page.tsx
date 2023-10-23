// localhost:3000/post/:postId/edit

import PostForm from "../../../../components/PostForm"

interface PostEdit {
    params:{
        postId: string
    }
}

export function generateMetadata({params:{postId}}:PostEdit){
    return{
        title:`Edit Post - ${postId} | Next.js`,
        description:`edit post - ${postId} description`
    }
}

export default function EditPost(props: PostEdit) {
    const postId =props.params.postId
    return (
        <>
            <div>edit post - {postId}</div>
            <PostForm postId={postId}/>
        </>
    )
}