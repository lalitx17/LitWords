import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Layout from "../layout";
import Head from "next/head";
import quirkyLalit from "/public/image/QuirkyLality2.jpg";
import CommentForm from "~/globalComponents/Comment";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import type { ReactMarkdownProps } from "react-markdown/lib/complex-types";



interface imageProps {
  src: string;
  alt: string;
}

const renderImage = (props: ReactMarkdownProps) => {
  const ImageProps = props as unknown as imageProps;
  return <Image src={ImageProps.src} alt={ImageProps.alt} width={500} height={5} className="rounded-[40px]" />;
};


interface Comment {
  name: string;
  email: string;
  comment: string;
}

const ArticlePage: React.FC = () => {
  const [activeComments, setActiveComments] = useState<Comment[]>([]);
  const router = useRouter();

  const slug = router.query.slug as string;

  const { data } = api.posts.getbyId.useQuery({ id: slug });

  const handleComment = (name: string, email: string, comment: string): void => {
    setActiveComments([...activeComments, { name, email, comment }]);
  };


  const markdown = data?.content ?? "";

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
                Published on . {String(data?.createdAt).slice(0, 15)}
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
          <div className="mb-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: renderImage
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
          <div className="mt-4">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">Comments</h2>
            <div className="space-y-4">
              {activeComments.map((comment, index) => (
                <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <strong className="mr-2">{comment.name}</strong>
                    <span className="text-gray-500">({comment.email})</span>
                  </div>
                  <p className="text-gray-800">{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <CommentForm onChange={(name, email, comment) => handleComment(name, email, comment)} />
        </div>
      </Layout>
    </>
  );
};



export default ArticlePage;