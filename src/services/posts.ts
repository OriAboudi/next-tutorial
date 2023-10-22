export async function getPosts() {
    const response = await fetch('http://dummyjson.com/posts', {
        next:{revalidate:4}
    })
    const data = await response.json()
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return data.posts
}
 
export async function getPostById(postId: string) {
    const response = await fetch(`http://dummyjson.com/posts/${postId}`,{
        next:{revalidate:4}
    })
    return await response.json()
}