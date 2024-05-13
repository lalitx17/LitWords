import {z} from 'zod';
import crypto from "crypto";
import { TRPCError } from '@trpc/server';
import {createTRPCRouter, publicProcedure} from '~/server/api/trpc';

export const authRouter = createTRPCRouter({
    signupMutation: publicProcedure.input(z.object({username: z.string(), password: z.string()})).mutation(async ({ctx, input}) => {
       const {username, password} = input;
       if (username && password){
        const user = await ctx.db.user.findFirst({where: {username: username}})
        if (user){
            throw new TRPCError({
                code: "BAD_REQUEST", 
                message: "username already taken"
            })
        }else{
           const salt = hash(username + new Date().getTime());
           const passwordHash = hash(password + salt)

           const newUser = await ctx.db.user.create({data: {username: username, passwordHash: passwordHash, salt: salt}})
           return {
            success: true,
            newuser: newUser
           }
        }
       }else{
         throw new TRPCError({
            code: "BAD_REQUEST", 
            message: "no username or password"
         })
       }
    }),
    loginMutation: publicProcedure.input(z.object({username: z.string(), password: z.string()})).mutation(async ({ctx, input}) => {
        const {username, password} = input;
        if (username && password){
            const user = await ctx.db.user.findFirst({where: {username: username}})
            if (user){
                const newHash = hash(password + user.salt)
                const token = hash(newHash + new Date().getTime().toString())
                if (newHash === user.passwordHash){
                    await ctx.db.token.create({ data: { value: token, userId: user.id}})
                    return {
                        token: token,
                        success: true
                    }
                }else{
                    throw new TRPCError({
                        code: "BAD_REQUEST", 
                        message: "wrong password"
                    })
                }
            }else{
                throw new TRPCError({
                    code: "BAD_REQUEST", 
                    message: "no such user"
                })
            }
        }else{
            throw new TRPCError({
                code: "BAD_REQUEST", 
                message: "no username or password"
            })
        }
    }),

});


export function hash(input: string){
    const hash = crypto.createHash('sha256').update(input).digest('base64')
    return hash;
}