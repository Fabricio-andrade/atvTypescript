import { Request, Response } from "express";
import { VerifyCardService } from "../../services/card/verifyCardService";

declare module "express-serve-static-core" {
    interface Request {
      user_id: string;
    }
  }
class VerifyCardController{
    async handle(req: Request, res:Response){
        const {number} = req.body;
        const idUser = req.user_id;

        const verifyCardService = new VerifyCardService();

        const verifyCard = await verifyCardService.execute({number, idUser});

        return res.json(verifyCard);
    }
}

export{VerifyCardController};