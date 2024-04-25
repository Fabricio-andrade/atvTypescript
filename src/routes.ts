import { Router } from 'express';
import { CreateUserController } from './controllers/user/createUserController';
import { AuthUserController } from './controllers/user/authUserController';
import { isAuthenticated } from './middleware/isAuthenticated';
import { CreateCardController } from './controllers/card/createCardController';
import { VerifyCardController } from './controllers/card/verifyCardController';

//const router = Router();


const router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.post('/card', isAuthenticated, new CreateCardController().handle);
router.post('/verify', isAuthenticated, new VerifyCardController().handle);

export {router};


//token Fabraz: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFpciIsInVzdWFyaW8iOiJKTWVzc2lhcyIsImlhdCI6MTcxNDA2ODM4NSwiZXhwIjoxNzE2NjYwMzg1LCJzdWIiOiI2ZjFjY2JkMi0yOGM0LTQxYTAtOTFhMy1mNWI0NWFmMTY0MzIifQ.9MBE7P-JzpEYgMUGGRRf_0U4yy0admXY9KwoO4tFDug