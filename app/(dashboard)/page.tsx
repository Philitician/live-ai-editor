import { db } from "@/drizzle/db";
import { document } from "@/drizzle/schema";
import { DocCard } from "./_components/doc-card";

import { Button } from "@/components/ui/button";
import { genId } from "@/lib/utils";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <ViewDocuments />
    </main>
  );
}

// view the Documents as a gallery of cards, 1 card per column for mobile, 2 cards per column for tablet, 3 cards per column for desktop
async function ViewDocuments() {
  const { userId } = auth();
  if (!userId) return null;

  const documents = await db
    .select({
      id: document.id,
      title: document.title,
    })
    .from(document)
    .where(eq(document.userId, userId));
  return (
    <div className="flex flex-col gap-4">
      <CreateDocument userId={userId} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {documents.map(({ id, title }) => (
          <DocCard key={id} id={id} title={title} />
        ))}
      </div>
    </div>
  );
}

function CreateDocument({ userId }: { userId: string }) {
  const id = genId();

  return (
    <form
      action={async () => {
        "use server";
        await db.insert(document).values({
          id,
          userId,
        });
        redirect(`/editor/${id}`);
      }}
    >
      <Button>New editor</Button>
    </form>
  );
}
