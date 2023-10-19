import PostCard from "@/app/components/PostCard"
import Link from "next/link"
// localhost:3000/post/:postId

export function generateMetadata ({params:{postId}}:PostView){
   
    return {
        title: `post - ${postId} | Next.js`,
        description: `Post ${postId} description`
    }
}


interface PostView{
    params:{
        postId:string
    }
 
}
export default function Post(props:PostView) {
    const postId = props.params.postId
    return (
        <>
        <header className="flex items-center ">

            <PostCard postId={postId} />
            <Link className="btn mx-3 ml-auto " href={`/post/${postId}/edit`} >Edit</Link>
            <button className="btn__red">Delet</button>
    
        </header>
            

        </>
    )
}