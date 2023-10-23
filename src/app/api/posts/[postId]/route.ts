import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
    context: {
        params: {
            postId: string
        }
    }) {

        return NextResponse.json({
            postId:context.params.postId
        })

}