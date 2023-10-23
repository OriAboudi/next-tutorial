'use client'

import { useState } from "react"
import { savePost } from '@/services/posts'

interface PostFormProps{
    postId?: string
}

export default function PostForm(props:PostFormProps) {
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const id = props?.postId?props.postId:""

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const result = await savePost({id, title, body })
    }

    return (

        <form onSubmit={handleSubmit} className="post-form__form">
            <div>{body}{title}</div>
            <div className="mb-4">
                <label className="post-form__label">Title</label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="  title..."
                    className="post-form__input" />
            </div>
            <div className="mb-4">
                <label className="post-form__label">Body</label>
                <textarea
                    rows={10}
                    className="post-form__input"
                    placeholder="  body..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button className="btn">SEND</button>
        </form>

    )
}