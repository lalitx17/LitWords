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
import { PrismaClient} from "@prisma/client";
import type { GetServerSideProps } from "next";
import { useState } from "react";
import cookie from "js-cookie";

interface imageProps {
  src: string;
  alt: string;
}

interface ArticlePageProps {
  article: {
    title: string;
    content: string;
    createdAt: string;
    comments: {
      name: string;
      email: string;
      comment: string;
    }[];
  };
}

const renderImage = (props: ReactMarkdownProps) => {
  const ImageProps = props as unknown as imageProps;
  return <Image src={ImageProps.src} alt={ImageProps.alt} width={500} height={5} className="rounded-[40px]" />;
};


const ArticlePage: React.FC<ArticlePageProps> = ({article}) => {
  const [deletebutton, setDeleteButton] = useState(true);
  const router = useRouter();
  const [comments, setComments] = useState(article?.comments);

  const slug = router.query.slug as string;

  const {mutate, isLoading: isPosting} = api.posts.comment.useMutation({
    onSuccess: () => {
      console.log("Comment added");
    },
    onError: (err) => {
      console.error(err);
    }
  });


  const handleComment = (name: string, email: string, comment: string): void => {
    if (!isPosting && name && email && comment) {
      mutate({name, email, comment, articleId: slug});
      setComments((prev) => [...prev, {name, email, comment}]);
  };
};

  const markdown = article?.content ?? "";

  return (
    <>
      <Head>
        <title>{article?.title}</title>
        <meta name="description" content={article?.content} />
      </Head>
      <Layout>
        <div className="p-4 md:p-8 md:mx-[20em]">
          <h1 className="mb-4 text-2xl font-bold md:text-4xl">{article?.title}</h1>
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
                Published on . {String(article?.createdAt).slice(0, 15)}
              </span>
            </div>
          </div>
          <hr />
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
              {comments.map((comment, index) => (
                <div key={index}>
                <div className="bg-white shadow-md p-4 rounded-lg flex flex-row justify-between items-center">
                  <div>
                  <div className="flex items-center mb-2">
                    <strong className="mr-2">{comment.name}</strong>
                    <span className="text-gray-500">({comment.email})</span>
                  </div>
                  <p className="text-gray-800">{comment.comment}</p>
                  </div>
                  {deletebutton && <button
                className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-10" 
                onClick={() => setDeleteButton(!deletebutton)}
              >
                Delete
              </button>}
                </div>

                
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


export const getServerSideProps: GetServerSideProps  = async (context) => {
  const slug = context.query.slug as string;
  const prisma = new PrismaClient();
  const article = await prisma.article.findUnique({
    where: {
      articleId: slug,
    },
    include: {
      comments: true,
    },
  });
  await prisma.$disconnect();
  return {
    props: {
      article: JSON.parse(JSON.stringify(article)) as ArticlePageProps["article"],
    }
  };
}


export default ArticlePage;