import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch data from a db
  // if not found, return a 404 error
  // else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Mosh" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: params.id, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch user from db
  // if not found, return 404
  // delete the user
  // return 200
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: params.id });
}
