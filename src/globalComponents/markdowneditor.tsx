// pages/markdown-editor.tsx

import React, { useState } from 'react';
import 'easymde/dist/easymde.min.css'; // Import CSS for SimpleMDE

import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });


const MarkdownEditorPage: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(''); // State to store Markdown content

  const onMarkdownChange = (markdown: string) => {
    setMarkdown(markdown);
  }

  console.log(markdown);

  return (
    <div>
      <SimpleMDE value={markdown} onChange={onMarkdownChange} />
    </div>
  );
};

export default MarkdownEditorPage;
