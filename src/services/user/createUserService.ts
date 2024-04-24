import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

interface UserRequest {
    nome: string
    email: string
    login: string
    senha: string
}

class CreateUserService {
    async execute({nome, email, login, senha}:UserRequest) {
        if (!email) {
            throw new Error("Email não enviado!");
        }

        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                email:email
            }
        })

        if(UserAlreadyExists){
            throw new Error("Email já utilizado");
            
        }

        const senhaHash = await hash(senha,8);

        const user = await prismaClient.usuario.create({
            data:{
                name: nome,
                email: email,
                login: login,
                senha: senhaHash
            },
            select: {
                id:true,
                name:true,
                login:true,

            }
        })
        return user;
    }
}
export { CreateUserService }