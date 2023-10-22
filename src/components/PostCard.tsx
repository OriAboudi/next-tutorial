import Image from "next/image";
import Link from "next/link";
import {Post} from "@/types/posts"



export default function PostCard(post: Post) {
    const {id:postId, title, body} = post
    const titleForImage = title.replace(' ', '').slice(0,2).toUpperCase()
    return (
        <li className="rounded-lg shadow-lg bg-neutral-700  ">
            <Image className="rounded-lg" src={`https://fakeimg.pl/600x400?text=${titleForImage}`} alt={title} width="300" height="200" />
            <Link href={`post/${postId}`}>
            <div className="p-4"> 
                <h4 className="text-xl text-neutral-50 font-medium">{title} </h4>
                    <p className="text-neutral-300">
                      {body.slice(50)}
                    </p>
              
            </div>
            </Link>
        </li>
    )
}