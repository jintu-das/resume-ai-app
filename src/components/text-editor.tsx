// src/Tiptap.tsx
import {
  BubbleMenu,
  Editor,
  EditorContent,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Code,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

// define your extension array
const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

export default function TextEditor() {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <Card>
      <CardHeader>
        <MenuBar editor={editor} />
      </CardHeader>
      <CardContent>
        <EditorContent editor={editor} className="border" />
        <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
        <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
      </CardContent>
    </Card>
  );
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  //   const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="">
      <div className="flex flex-wrap items-center gap-2 p-2">
        <Button
          size="icon"
          variant={editor.isActive("bold") ? "secondary" : "outline"}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          //   className={editor.isActive("bold") ? "is-active" : ""}
        >
          <Bold className="size-4" />
        </Button>
        <Button
          size="icon"
          variant={editor.isActive("bold") ? "secondary" : "outline"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
        >
          <Italic className="size-4" />
        </Button>
        <Button
          size="icon"
          variant={editor.isActive("strike") ? "secondary" : "outline"}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="size-4" />
        </Button>
        <Button
          size="icon"
          variant={editor.isActive("code") ? "secondary" : "outline"}
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
        >
          <Code className="size-4" />
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          Clear marks
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          Clear nodes
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          Paragraph
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H3
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          H4
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          H5
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          H6
        </Button>
        <Button
          size="icon"
          variant={editor.isActive("bulletList") ? "secondary" : "ghost"}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="size-4" />
        </Button>
        <Button
          size="icon"
          variant={editor.isActive("orderedList") ? "secondary" : "ghost"}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="size-4" />
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          Code block
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          Blockquote
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Horizontal rule
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          Hard break
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </Button>
      </div>
    </div>
  );
};
