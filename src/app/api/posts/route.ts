import { NextRequest, NextResponse } from "next/server";
import {Post} from "@/types/posts"

export async function GET(request:NextRequest, context:{params:{}}) {
    const {searchParams} = new URL(request.url)
    const search = searchParams.get('search')|| ''
    const regex = new RegExp(search,'i') 
    const posts: Post[] =  Array.from({length:30}).map((_,index)=>{
      return{
        id:(index+1).toString() ,
        title: `post ${index +1}`,
        body: `The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.`,
      }
    }).filter(post=>Object.values(post).some(field=>regex.test(field.toString())))
    try {
        return NextResponse.json({posts,search})
    } catch (error) {
        console.log(error);

    }
}

export async function POST(request :NextRequest){

    const post:Post  =await request.json()
    return NextResponse.json({post})

}
