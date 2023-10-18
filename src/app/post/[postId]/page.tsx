import Link from "next/link"

// localhost:3000/post/:postId
interface PostView{
    params:{
        postId:string
    }
 
}
export default function Post(props:PostView) {
    const postId = props.params.postId
    return (
        <>
        <header className="flex items-center">

            <h1>post - {postId}</h1>
            <Link className="btn mx-3 ml-auto " href={`/post/${postId}/edit`} >Edit</Link>
            <button className="btn__red">Delet</button>
    
        </header>
            

        </>
    )
}