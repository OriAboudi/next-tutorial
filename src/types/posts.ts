export interface Post{
    id?: string,
    title: string,
    body: string,
    userId?:number,
    tags?: [],
    reactions?: number
}

export interface PostView{
    params:{
        postId:string
    }
}