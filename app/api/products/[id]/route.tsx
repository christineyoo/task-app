import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Milk", price: 2.5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: params.id, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: params.id });
}
