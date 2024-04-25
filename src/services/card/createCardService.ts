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

        if (!nameUser) {
            throw new Error("Não enviou um nome!");
        }

        if (!validade) {
            throw new Error("Não informou a validade!");
        }

        if (!digSeg) {
            throw new Error("Não informou digitos de segurança!");
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
                number: true,
                nameUser: true,
                validade: true,
                idUser: true

            }
        })
        return card;
    }
}
export { CreateCardService }