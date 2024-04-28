// pages/markdown-editor.tsx

import React, { useState } from 'react';
import 'easymde/dist/easymde.min.css'; // Import CSS for SimpleMDE

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

interface MarkdownEditorPageProps { 
  onDataChange: (data: string) => void;
}

const MarkdownEditorPage: React.FC<MarkdownEditorPageProps> = ({onDataChange}) => {


  const [markdown, setMarkdown] = useState<string>(''); // State to store Markdown content

  const onMarkdownChange = (markdown: string) => {
    setMarkdown(markdown);
    onDataChange(markdown);
  }

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      status: false,
      shortcuts: {
        drawTable: "Cmd-Alt-T"
    },
    tabSize: 4,
    placeholder: "Type here...",
    };
  }, []);

  return (
    <div>
      <SimpleMDE options={autofocusNoSpellcheckerOptions} value={markdown} onChange={onMarkdownChange} />
    </div>
  );
};

export default MarkdownEditorPage;
