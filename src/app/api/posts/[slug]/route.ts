import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

// GET single post
export const GET = async (
  // Router Handler 첫 argument는 항상 Request이므로 생략 불가
  req: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
};
