import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthRequest{
    login:string;
    senha:string;

}

class AuthUserService{
    async execute({login,senha}:AuthRequest){
        const user = await prismaClient.usuario.findFirst({
            where:{
                login:login
            }
        })

        if (!user) {
            throw new Error("Usuario ou senha incorretos!");
        }

        const senhaMatch = await compare(senha,user.senha);
        if (!senhaMatch) {
            throw new Error("Usuário ou senha incorretos!");
            
        }

        const token = sign({
            name: user.name,
            usuario: user.login
        },
        process.env.JWT_SECRET!,
        {
            subject: user.id,
            expiresIn: '30d'
        })

        return {
            id:user.id,
            name:user.name,
            email:user.email,
            token:token
            }
        
    }
}

export {AuthUserService};