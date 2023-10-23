import { Post } from "@/types/posts";

export async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/posts', {
            next: { revalidate: 4 }
        })
        const data = await response.json()
        return data.posts
        
    } catch (error) {
        console.log(error);
        
    }
}

export async function getPostById(postId: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        next: { revalidate: 4 }
    })
    return await response.json()
  } catch (error) {
    console.log(error);
    
  }
}

export async function savePost(post: Post) {
    try {
        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        if (!response.ok) {
            alert('Network error')
            return
        } else {
            console.log('success');
            
            return await response.json()
        }

    } catch (error) {
        console.log(error);
        alert("Error!")
    }
}