import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(async ({ctx}) => {
    const blogs = await ctx.db.article.findMany({
      orderBy:[{createdAt: 'desc'}]
    });
    return blogs;
  }),

  getbyId:publicProcedure.input(z.object({articleId: z.string()})).query(async ({ctx, input}) => {
    const blog = await ctx.db.article.findUnique({
      where: {articleId: input.articleId}, 
      include: {comments: true}
    });
    return blog;
  }),

  getbyTag:publicProcedure.input(z.object({tag: z.string()})).query(async ({ctx, input}) => {
    const blogs = await ctx.db.article.findMany({
      where: {tags: {hasSome: [input.tag]}},
      orderBy:[{createdAt: 'desc'}]
    });
    return blogs;
  }),

  create:publicProcedure.input(z.object({
    title: z.string(), content: z.string(), tags: z.array(z.string())
  })).mutation(async ({ctx, input}) => {
    const article = await ctx.db.article.create({
      data: {
          title: input.title, 
          tags: input.tags,
          content: input.content,
      },
  });
  return article; 
}),

comment:publicProcedure.input(z.object({
  name: z.string(), email: z.string(), comment: z.string(), articleId: z.string()
})).mutation(async ({ctx, input}) => {
  const comment = await ctx.db.comment.create({
    data: {
        name: input.name, 
        email: input.email,
        comment: input.comment,
        article: {
            connect: {articleId: input.articleId}
        }
    },
});
return comment; 
}),


tokenQuery: publicProcedure.input(z.object({token: z.string()})).query(async ({ctx, input}) => {
  const token = await ctx.db.token.findFirst({
    where: {value: input.token},
    include: {user: true}
  });
  if (token){
    return token;
  }else{
     throw new TRPCError({
      code: "BAD_REQUEST", 
      message: "no such token"
     })
  }
}),

deleteComment: publicProcedure.input(z.object({commentId: z.string()})).mutation(async ({ctx, input}) => {
  const comment = await ctx.db.comment.delete({
    where: {commentId: input.commentId}
  });
  return comment;
}),

deleteArticle: publicProcedure.input(z.object({articleId: z.string()})).mutation(async({ctx, input}) => {
  const article = await ctx.db.article.delete({
    where: {articleId: input.articleId}
  });
  return article;
}),

});
