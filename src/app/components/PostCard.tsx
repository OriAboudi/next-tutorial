import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
    postId: string;
}

export default function PostCard({ postId }: PostCardProps) {
    return (
        <li className="rounded-lg shadow-lg bg-neutral-700  ">
            <Image className="rounded-lg" src={`https://fakeimg.pl/600x400?text=post${postId}`} alt={postId} width="300" height="200" />
            <Link href={`post/${postId}`}>
            <div className="p-4"> 
                <h4 className="text-xl text-neutral-50 font-medium">Title </h4>
                    <p className="text-neutral-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, totam odit blanditiis ipsum, consectetur aut non assumenda nam voluptatem et placeat illo natus qui in maxime! Nihil illum laudantium suscipit!
                    </p>
              
            </div>
            </Link>
        </li>
    )
}