// import { Room } from "./_components/Room";
// import { CollaborativeEditor } from "@/components/CollaborativeEditor";
import { document } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { Loading } from "@/components/Loading";
import { Editor } from "./_components/editor";
import { TitleInput } from "./_components/title-input";
import { Room } from "./_components/room";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditorPage({ params }: Props) {
  const { id } = params;

  const docs = await db
    .select()
    .from(document)
    .where(eq(document.id, id))
    .limit(1);

  const doc = docs[0];
  if (!doc) return <Loading />;
  return (
    <main className="flex flex-col gap-4">
      {/* <TitleInput defaultValue={doc.title} /> */}

      <Room roomId={id}>
        {/* <Editor /> */}
        <CollaborativeEditor />
      </Room>
    </main>
  );
}
