import { NextResponse, type NextRequest } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  return NextResponse.json({
    status: "success",
  });
};
