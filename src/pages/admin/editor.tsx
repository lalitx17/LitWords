import type { ChangeEvent, FormEvent } from 'react';
import MarkdownEditor from '../../globalComponents/markdowneditor';
import { useForm } from "~/context/useFrom";
import { api } from '~/utils/api';


export default function MyForm() {

  const initialStateFormData = {
    title: '',
    content: '',
    tags: ""
  };

  const { formData, setFormData } = useForm();

  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setFormData(() => ({
        ...initialStateFormData,
      }))
    },
    onError: (err) => {
      console.error(err);
    }
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedTags = formData.tags.split(',').map(tag => tag.trim());
    if (Object.keys(formData).length !== 0) {
      mutate({ title: formData.title, content: formData.content, tags: updatedTags })
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-center">Create a New Post</h1>
      <div className="w-4/5 mx-auto my-10 p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="tags" className="block text-gray-600 font-semibold mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <MarkdownEditor />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            disabled={isPosting}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};



//react-markdown