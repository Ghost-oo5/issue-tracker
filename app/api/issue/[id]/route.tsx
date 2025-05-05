import { IssueSchema, PatchIssueSchema } from "@/app/validationSchema";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import AuthOptions from "../../auth/AuthOptions";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const session = await getServerSession(AuthOptions);
  if(!session){
    return NextResponse.json({},{status:401})
  }
  const body = await request.json();
  const validation = await PatchIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const { assignedToUserId } = body;
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user) {
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });
    }
  }
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!issue) {
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });
  }
  const updateIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title: body.title,
      description: body.description,
      assignedToUserId,
    },
  });

  return NextResponse.json(updateIssue);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const session = await getServerSession(AuthOptions);
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) {
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });
  }
  await prisma.issue.delete({
    where: { id: issue.id },
  });

  return NextResponse.json({});
}
