import Image from "next/image";
import solitude from "../../public/image/solitude.jpg";
import quirkyLalit from "../../public/image/QuirkyLality2.jpg";
import type { RouterOutputs } from "~/utils/api";
import Link from "next/link";
import { api } from "~/utils/api";
type ArticlesByMe = RouterOutputs["posts"]["getAll"][number];
import ConfirmationDialog from "./ConfirmationDialogBox";
import React, { useState } from "react";


export default function Blogcard(props: ArticlesByMe & { authentication: boolean }) {
  const { title, content, createdAt, articleId, authentication } = props;

  const [confirmationButton, setConfirmationButton] = useState(false);

  const deleteArticleMutation = api.posts.deleteArticle.useMutation({
    onSuccess: () => {
      console.log("Article Deleted");
    },
    onError: (err) => {
      console.error(err);
    }
  });

  const handleArticleDeleter = (articleId: string) => {
    try {
      deleteArticleMutation.mutate({ articleId });
    } catch (error) {
      console.error(error);
    }
  };

  const extractFirstImage = (markdown: string): string | null => {
    const imagePattern = /!\[.*?\]\((.*?)\)/;
    const match = imagePattern.exec(markdown)?.[1] ?? null;
    return match;
  };

  const firstImageSrc = extractFirstImage(content) ?? solitude.src;


  const stripMarkdownImages = (markdown: string) => {
    return markdown.replace(/!\[.*?\]\(.*?\)/g, '');
  };

  const strippedContent = stripMarkdownImages(content);
  const slicedContent = strippedContent.length > 100 ? strippedContent.slice(0, 100) + "..." : strippedContent;


  return (
    <>
      <div className="m-8 max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href={`/articles/${articleId}`}>
          <Image
            src={firstImageSrc}
            width={600}
            height={400}
            alt="solitude"
            className="rounded-t-lg p-4"
          />
        </Link>
        <div className="p-5">
        <Link href={`/articles/${articleId}`}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <div className="my-2 flex flex-row">
            <Image
              src={quirkyLalit.src}
              width={50}
              height={50}
              alt="quirkyLalit"
              className="rounded-full"
            />
            <div className="mx-2 my-auto font-montser  text-[14px] text-white">
              <span>
                <i>By</i>
              </span>
              <span className="mx-2 font-[600]">
                <i>Lalit Yadav</i>
              </span>
              <span className="mx-4">
                <i>{String(createdAt).slice(0, 15)}</i>
              </span>
            </div>
          </div>
          <div className="my-4 font-normal text-gray-700 dark:text-gray-400">
            {slicedContent}
          </div>
          <div className="flex flex-row justify-between">
            <Link
              href={`/articles/${articleId}`}
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            {authentication && <button
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setConfirmationButton(true)}
            >
              Delete
            </button>}

          </div>
        </div>
      </div>
      {confirmationButton && <ConfirmationDialog message="Are you sure you want to delete this article?" onConfirm={() => handleArticleDeleter(articleId)} onCancel={() => setConfirmationButton(false)} />}
    </>
  );
}