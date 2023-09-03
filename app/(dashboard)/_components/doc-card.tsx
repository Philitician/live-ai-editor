"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Document } from "@/drizzle/schema";
import Link from "next/link";
import { db } from "@/drizzle/db";
import { deleteDocument } from "../_actions";

export function DocCard({ id, title }: Omit<Document, "content">) {
  return (
    <div>
      <Card className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        {/* <CardContent></CardContent>
      <p>Card Content</p>
    </CardContent> */}
        <CardFooter className="flex justify-end">
          <Button
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();

              await deleteDocument(id);
            }}
          >
            <TrashIcon className="mr-2 h-4 w-4" /> Delete
          </Button>
          {/* <Button asChild>
          <Link href={`/editor/${id}`}>Go to</Link>
        </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
