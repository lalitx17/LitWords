import { useState } from 'react';
import type { FormEvent } from 'react';
import Image from 'next/image';

interface CommentProps {
    onChange: (name: string, email: string, comment: string) => void;
}

const CommentForm:React.FC<CommentProps> = ({onChange}) => {
  const [showCommentDialog, setShowCommentDialog] = useState<boolean>(false);

  const handleToggleCommentDialog = () => {
    setShowCommentDialog(!showCommentDialog);
  };

  const handleComment = (name: string, email: string, comment: string) => {
    onChange(name, email, comment);
  };

  return (
    <div className="w-3/5 mt-8">
      <div className={showCommentDialog? "bg-white rounded-lg shadow-md p-6": ""}>
      {!showCommentDialog && <button
      onClick={handleToggleCommentDialog}
      className="mb-2 rounded-full px-3 py-1 text-white focus:outline-none relative transition-transform duration-200 transform hover:scale-110"
    >
      <Image
        src="/image/comment.png"
        width={40}
        height={20}
        alt="comment"
        className="rounded-full"
      />
    </button>}
        {showCommentDialog && (
          <>
          <h2 className="text-xl font-bold mb-4">Leave a Thought.</h2>
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
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
                setShowCommentDialog(false);
              }
            }}
          >
            <div className="mb-2">
              <input
                name="name"
                className="w-full rounded border px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-2">
              <input
                name="email"
                type="email"
                className="w-full rounded border px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-2">
              <textarea
                name="comment"
                className="w-full rounded border px-3 py-2 focus:outline-none focus:border-blue-500"
                rows={4}
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded bg-blueG px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:bg-blueG"
            >
              Submit
            </button>
          </form>
          </>)}
      </div>
    </div>
  );
};

export default CommentForm;
