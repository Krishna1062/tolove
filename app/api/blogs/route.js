import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const blogs = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return NextResponse.json(blogs);
}
