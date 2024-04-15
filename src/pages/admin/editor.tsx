import { useState} from 'react';
import type { ChangeEvent, FormEvent } from 'react';


import { api } from '~/utils/api';


interface FormData {
  title: string;
  content: string;
  tags: string[];
  image: string;
}

export default function MyForm() {

const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
   onSuccess: () => {
    setFormData(() => ({
      ...initialStateFormData,
    }))}, 
    onError: (err) => {
      console.error(err);
    }
   
});

  
const initialStateFormData = {
title: '',
content: '',
tags: [],
image: ''
};

  const [formData, setFormData] = useState<FormData>(initialStateFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name == 'tags'){
        setFormData((prevData) => ({
            ...prevData, 
            [name]: value.split(',').map((tag) => tag.trim()),
        }));
    } else{
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.keys(formData).length !== 0){
      mutate({title:formData.title, content: formData.content, tags: formData.tags, image: formData.image})
    }
    console.log(formData);
   };

  return (
    <>
    <h1 className="text-2xl font-semibold text-center">Create a new post</h1>
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
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
          <label htmlFor="title" className="block text-gray-600 font-semibold mb-2">
            image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
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
            value={formData.tags.join(', ')}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-600 font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

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

