import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { IssueSchema } from "../../validationSchema";
import { getServerSession } from "next-auth";
import AuthOptions from "../auth/AuthOptions";

export async function POST(request: NextRequest) {
    const session = await getServerSession(AuthOptions);
    if(!session){
      return NextResponse.json({},{status:401})
    }
  const body = await request.json();
  const validation = IssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const newissue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newissue, { status: 201 });
}
