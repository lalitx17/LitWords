import { useState } from "react";
import Image from "next/image";
import type { FormEvent } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Layout from "../layout";
import Head from "next/head";
import quirkyLalit from "/public/image/QuirkyLality2.jpg";


interface Comment {
  name: string;
  email: string;
  comment: string;
}
 
const ArticlePage:React.FC = () => {
  const [activeComments, setActiveComments] = useState<Comment[]>([]);
  const router = useRouter();

  const slug = router.query.slug as string;

  const {data} = api.posts.getbyId.useQuery({id:slug});

  const handleComment = (name: string, email: string, comment: string): void => {
    setActiveComments([...activeComments, { name, email, comment }]);
  };

  return (
    <>
    <Head>
      <title>{data?.title}</title>
      <meta name="description" content={data?.content} />
    </Head>
    <Layout>
    <div className="p-4 md:p-8 md:mx-[20em]">
      <h1 className="mb-4 text-2xl font-bold md:text-4xl">{data?.title}</h1>
      <p className="text-base">Continued strength is due in part to both U.S. and European commitments to climate-forward industrial policies</p>
      <div className="my-2 flex flex-row">
            <Image
              src={quirkyLalit.src}
              width={50}
              height={50}
              alt="quirkyLalit"
              className="rounded-full"
            />
            <div className="mx-2 my-auto font-montser text-[14px] flex flex-col">
              <span className="mx-2 font-[600]">
                <i>Lalit Yadav</i>
              </span>
              <span className="ms-2">
                Published on . {String(data?.createdAt).slice(0,15)}
              </span>
            </div>
          </div>
          <hr />
      <div className="mb-4">
        <Image
          src="/image/solitude.jpg"
          width={700}
          height={400}
          alt="solitude"
          className="rounded-[40px] p-8"
        />
      </div>
      <p className="mb-4">
        {data?.content}
      </p>
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
    </>
  );
};

export default ArticlePage;
