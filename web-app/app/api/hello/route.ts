import { getMessage } from "@/app/lib/getMessage";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getMessage();
  return NextResponse.json(data);
}
