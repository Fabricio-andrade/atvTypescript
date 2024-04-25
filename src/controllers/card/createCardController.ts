import { Request, Response } from "express";
import { CreateCardService } from "../../services/card/createCardService";

declare module "express-serve-static-core" {
    interface Request {
      user_id: string;
    }
  }

class CreateCardController{

    async handle(req: Request, res: Response) {
        const {number, nameUser, validade, digSeg} = req.body;

        const user = req.user_id;

        const createCardService = new CreateCardService();
        const card = await createCardService.execute({number, nameUser, validade, digSeg, user});
        return res.json({card})
    }
}

export{ CreateCardController }