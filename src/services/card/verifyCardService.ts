import prismaClient from "../../prisma";

interface verifyCard {
    number: string,
    idUser: string
}

class VerifyCardService {
    async execute({number, idUser}:verifyCard){
        const card = await prismaClient.card.findFirst({
            where:{
                number:number
            },
            select:{
                number: true,
                nameUser: true,
                validade: true,
                idUser: true
            }
        })
        if (!card) {
            throw new Error("Cartão não encontrado!");
        }
        if (card.idUser == idUser) {
            return [card.number, card.nameUser, card.validade];
        } else {
            return {ok:"Este cartão não lhe pertence"};
            
        }
    }
}

export { VerifyCardService }