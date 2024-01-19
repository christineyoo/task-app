import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    { a: 1, b: 1 },
    { a: 3, b: 1 },
  ]);
}

export async function POST(request: NextRequest) {
  // read the body of the request:
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // simulate the generation of an id:
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
