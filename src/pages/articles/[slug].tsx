import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";

interface CommentEvent extends FormEvent {
  target: CommentTarget;
}

interface CommentTarget extends EventTarget {
  elements: CommentElements;
}

interface CommentElements {
  comment: HTMLInputElement;
}

const ArticlePage = () => {
  const [likes, setLikes] = useState<number>(0);
  const [comments, setComments] = useState<string[]>([]);

  const handleLike = (): void => {
    setLikes(likes + 1);
  };

  const handleComment = (comment: string): void => {
    setComments([...comments, comment]);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="mb-4 text-2xl font-bold md:text-4xl">Article Title</h1>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        faucibus risus erat, in laoreet ipsum volutpat tempus. Vivamus tincidunt
        porta purus ut convallis. Etiam scelerisque dictum nisl non consectetur.
        Praesent pulvinar eros finibus nibh bibendum, vitae ultricies ante
        dictum. Proin lacinia nunc vitae mauris vulputate, nec condimentum
        sapien maximus. Nullam id felis nunc. <br /> <br />Sed gravida vitae velit a lacinia.
        Maecenas scelerisque, purus non gravida laoreet, metus mi condimentum
        urna, rhoncus laoreet tortor lectus in ex. Mauris scelerisque sapien ut
        ipsum dignissim imperdiet varius vel ligula. Suspendisse sed ipsum nec
        sem varius elementum. Sed a ligula in libero malesuada gravida.
        Pellentesque vulputate nibh libero, ut euismod orci lobortis venenatis.
        Donec eget lacus sagittis, fringilla nisi vitae, porttitor nisi.
        Praesent mattis magna lectus, nec malesuada felis semper non. Nullam
        commodo quam fermentum ex molestie dictum vel sit amet ante. Aenean
        semper nulla ac urna semper gravida quis in turpis. Praesent vel mattis
        risus.<br /><br /> Aliquam id erat in nunc accumsan ornare id vitae eros. Vestibulum
        lobortis arcu et dolor pellentesque, et semper erat suscipit. Praesent
        purus enim, vehicula a sollicitudin eget, facilisis at neque. Donec
        convallis lectus ut nisi accumsan scelerisque. Cras luctus suscipit
        metus, eget ultricies massa eleifend sit amet. Quisque a metus sit amet
        massa auctor posuere. Vivamus ultrices elit et massa pellentesque
        tempus. Sed pellentesque est viverra, porttitor augue in, placerat diam.
        Sed ac purus cursus elit iaculis iaculis sit amet vitae augue.<br /><br />
        Suspendisse pulvinar fringilla rutrum. Fusce ut augue id turpis eleifend
        volutpat. Aliquam luctus nunc at hendrerit pellentesque. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Cras diam libero, cursus varius arcu nec, euismod iaculis felis.
        Etiam feugiat ligula eu tempus dictum.
      </p>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={handleLike}
      >
        Like {likes}
      </button>
      <div className="mt-4">
        <h2 className="mb-2 text-xl font-bold md:text-2xl">Comments</h2>
        {comments.map((comment, index) => (
          <p key={index} className="mb-2 border-b pb-2">
            {comment}
          </p>
        ))}
        <form
          onSubmit={(e: CommentEvent): void => {
            e.preventDefault();
            handleComment(e.target.elements.comment.value);
            e.target.reset();
          }}
        >
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
  );
};

export default ArticlePage;
