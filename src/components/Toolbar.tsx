import {
  ConditionalContents,
  UndoRedo,
  Separator,
  BoldItalicUnderlineToggles,
  CodeToggle,
  StrikeThroughSupSubToggles,
  ListsToggle,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
  ChangeCodeMirrorLanguage,
  ShowSandpackInfo,
} from "@shubasish/mdx-editor";

export default function Toolbar() {
  return (
    <ConditionalContents
      options={[
        {
          when: (editor) => editor?.editorType === "codeblock",
          contents: () => <ChangeCodeMirrorLanguage />,
        },
        {
          when: (editor) => editor?.editorType === "sandpack",
          contents: () => <ShowSandpackInfo />,
        },
        {
          fallback: () => (
            <>
              <UndoRedo />
              <Separator />

              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <Separator />

              <StrikeThroughSupSubToggles />
              <Separator />

              <ListsToggle />
              <Separator />

              <CreateLink />
              <InsertImage />

              <Separator />
              <InsertTable />
              <InsertThematicBreak />

              <Separator />
              <InsertCodeBlock />
            </>
          ),
        },
      ]}
    />
  );
}
