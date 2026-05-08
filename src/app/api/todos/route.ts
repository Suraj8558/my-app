import { NextResponse } from "next/server";
import { createTodo, listTodos } from "@/src/lib/todoStore";

export async function GET() {
  return NextResponse.json({ data: listTodos() });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { title?: unknown };

  if (typeof body.title !== "string" || !body.title.trim()) {
    return NextResponse.json(
      { error: "title is required and must be a non-empty string" },
      { status: 400 },
    );
  }

  const todo = createTodo({ title: body.title.trim() });
  return NextResponse.json({ data: todo }, { status: 201 });
}
