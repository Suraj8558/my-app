import { NextResponse } from "next/server";
import { getTodoById, removeTodo, updateTodo } from "@/src/lib/todoStore";

type TodoUpdateBody = {
  title?: unknown;
  completed?: unknown;
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const todo = getTodoById(id);

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ data: todo });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = (await request.json()) as TodoUpdateBody;

  const hasTitle = typeof body.title !== "undefined";
  const hasCompleted = typeof body.completed !== "undefined";

  if (!hasTitle && !hasCompleted) {
    return NextResponse.json(
      { error: "Provide title and/or completed to update" },
      { status: 400 },
    );
  }

  if (hasTitle && (typeof body.title !== "string" || !body.title.trim())) {
    return NextResponse.json(
      { error: "title must be a non-empty string when provided" },
      { status: 400 },
    );
  }

  if (hasCompleted && typeof body.completed !== "boolean") {
    return NextResponse.json(
      { error: "completed must be a boolean when provided" },
      { status: 400 },
    );
  }

  const updated = updateTodo(id, {
    title: hasTitle ? (body.title as string).trim() : undefined,
    completed: hasCompleted ? (body.completed as boolean) : undefined,
  });

  if (!updated) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ data: updated });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const deleted = removeTodo(id);

  if (!deleted) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(null, { status: 204 });
}
