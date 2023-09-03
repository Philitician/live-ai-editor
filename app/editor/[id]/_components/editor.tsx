"use client";
import { Editor as NovelEditor } from "novel";
import { updateContent } from "../_actions";

export function Editor() {
  return (
    <>
      <NovelEditor
        onDebouncedUpdate={async (editor) => {
          const content = editor?.getText();

          if (!content) return;
          await updateContent(content);
        }}
      />
    </>
  );
}
