import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

interface CardRequest {
    number: string
    nameUser: string
    validade: string
    digSeg: string
    user: string
}

class CreateCardService {
    async execute({number, nameUser, validade, digSeg, user}:CardRequest) {
        if (!number) {
            throw new Error("Não enviou numero do cartão!");
        }

        const cardExists = await prismaClient.card.findFirst({
            where:{
                number:number
            }
        })

        if(cardExists){
            throw new Error("Cartão já cadastrado!");
            
        }

        const digHash = await hash(digSeg,8);

        const card = await prismaClient.card.create({
            data:{
                number: number,
                nameUser: nameUser,
                validade: validade,
                digSeg: digHash,
                idUser: user
            },
            select: {
                number:true,
                nameUser:true,
                validade:true,

            }
        })
        return card;
    }
}
export { CreateCardService }