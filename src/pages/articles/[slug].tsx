import { useState } from "react";
import Image from "next/image";
import type { FormEvent } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Layout from "../layout";


interface Comment {
  name: string;
  email: string;
  comment: string;
}

const ArticlePage:React.FC = () => {
  const [activeLikes, setActiveLikes] = useState<number>(0);
  const [activeComments, setActiveComments] = useState<Comment[]>([]);
  const router = useRouter();

  const slug = router.query.slug as string;

  const {data} = api.posts.getbyId.useQuery({id:slug});

  const handleLike = (): void => {
    setActiveLikes(activeLikes + 1);
  };

  const handleComment = (name: string, email: string, comment: string): void => {
    setActiveComments([...activeComments, { name, email, comment }]);
  };

  return (
    <Layout>
    <div className="p-4 md:p-8 md:mx-[10em]">
      <h1 className="mb-4 text-2xl font-bold md:text-4xl">{data?.title}</h1>
      <div className="mb-4">
        <Image
          src="/image/solitude.jpg"
          width={600}
          height={400}
          alt="solitude"
          className="rounded-[40px] p-8"
        />
      </div>
      <p className="mb-4">
        {data?.content}
      </p>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={handleLike}
      >
        Like {data?.likes}
      </button>
      <div className="mt-4">
        <h2 className="mb-2 text-xl font-bold md:text-2xl">Comments</h2>
        {activeComments.map((comment, index) => (
          <div key={index} className="mb-2 border-b pb-2">
            <p><strong>{comment.name} ({comment.email}): </strong>{comment.comment}</p>
          </div>
        ))}
       <div className="w-2/5 mt-8 mx-auto"> 
        <h3 className="mb-2 text-lg font-bold md:text-xl">Leave a comment</h3>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            const nameInput = (e.target as HTMLFormElement).elements.namedItem("name") as HTMLInputElement;
            const emailInput = (e.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement;
            const commentInput = (e.target as HTMLFormElement).elements.namedItem("comment") as HTMLInputElement;
            const name: string = nameInput.value.trim();
            const email: string = emailInput.value.trim();
            const comment: string = commentInput.value.trim();
            if (name && email && comment) {
              handleComment(name, email, comment);
              e.currentTarget.reset();
            }
          }}
        >
          <input
            name="name"
            className="mb-2 w-full rounded border px-3 py-2"
            placeholder="Your Name"
          />
          <input
            name="email"
            type="email"
            className="mb-2 w-full rounded border px-3 py-2"
            placeholder="Your Email"
          />
          <input
            name="comment"
            className="mb-2 w-full rounded border px-3 py-2"
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ArticlePage;
