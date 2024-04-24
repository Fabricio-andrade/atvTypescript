import { Request, Response } from "express";
import { CreateCardService } from "../../services/card/createCardService";

class CreateCardController{

    async handle(req: Request, res: Response) {
        const {number, nameUser, validade, digSeg, user} = req.body;

        const createCardService = new CreateCardService();
        const card = await createCardService.execute({number, nameUser, validade, digSeg, user});
        return res.json({user})
    }
}

export{ CreateCardController }