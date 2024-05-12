// pages/markdown-editor.tsx

import 'easymde/dist/easymde.min.css'; // Import CSS for SimpleMDE
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import {useForm} from '~/context/useFrom';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const MarkdownEditorPage: React.FC = () => {

  const {formData, setFormData} = useForm();

  const onMarkdownChange = (markdown: string) => {
    setFormData((prevData) => ({
      ...prevData,
      content: markdown,
    }));
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
      <SimpleMDE options={autofocusNoSpellcheckerOptions} value={formData.content} onChange={onMarkdownChange} />
    </div>
  );
};

export default MarkdownEditorPage;
