// pages/markdown-editor.tsx

import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css'; // Import CSS for SimpleMDE

import dynamic from 'next/dynamic';

const CodeMirrorComponent = dynamic(() => import('codemirror.js'), { ssr: false });

const MarkdownEditorPage: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(''); // State to store Markdown content

  return (
    <div>
        {typeof window !== 'undefined' && <CodeMirrorComponent />} {/* Render CodeMirrorComponent only on the client side */}   
      <h1>Markdown Editor</h1>
      <SimpleMDE
        value={markdown}
        onChange={(value) => setMarkdown(value)}
        options={{ autofocus: true }} // Example of SimpleMDE options
      />
      <div>
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: markdown }} /> {/* Render Markdown content as HTML */}
      </div>
    </div>
  );
};

export default MarkdownEditorPage;
