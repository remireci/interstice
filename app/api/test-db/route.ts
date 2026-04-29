import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  const result = await pool.query("select now() as server_time");
  return NextResponse.json(result.rows[0]);
}
