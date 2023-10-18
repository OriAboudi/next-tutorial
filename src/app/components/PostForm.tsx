'use client'

import { useState } from "react"

export default function PostForm() {
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    return (

        <form className="post-form__form">
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
                <input type="text"
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