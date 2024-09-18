import React, { useEffect, useRef, useCallback } from "react";
import EditorJS, {  LogLevels } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import InlineCode from '@editorjs/inline-code';

interface TextEditorProps {
  onChange: (content: string) => void;
}

export const TextEditor: React.FC<TextEditorProps> = React.memo(({ onChange }) => {
  const editorInstance = useRef<EditorJS | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const initializeEditor = useCallback(() => {
    if (editorRef.current && !editorInstance.current) {
      const editor = new EditorJS({
        holder: editorRef.current,
        placeholder: "Write your article here...",
        tools: {
          header: Header,
          list: List,     // Adding the List tool
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
          },
        },
        onChange: async () => {
          if (editorInstance.current) {
            const data = await editorInstance.current.save();
            onChange(JSON.stringify(data));
          }
        },
        logLevel: "ERROR" as LogLevels,
      });
      editorInstance.current = editor;
    }
  }, [onChange]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (editorRef.current) {
        initializeEditor();
      }
    }, 0);

    return () => {
      clearTimeout(timer);
      if (editorInstance.current) {
        editorInstance.current.isReady
          .then(() => {
            editorInstance.current?.destroy();
            editorInstance.current = null;
          })
          .catch((e) => console.error("ERROR destroying editor", e));
      }
    };
  }, [initializeEditor]);

  return (
    <div className="mt-2">
      <div ref={editorRef} className="bg-white border mx-auto p-2 min-h-[300px]"></div>
    </div>
  );
});

TextEditor.displayName = "TextEditor";
