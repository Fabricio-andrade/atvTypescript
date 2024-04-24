import { Router } from 'express';
import { CreateUserController } from './controllers/user/createUserController';
import { AuthUserController } from './controllers/user/authUserController';

//const router = Router();


const router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
//router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

export {router};


//token Fabraz: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFicmljaW8iLCJ1c3VhcmlvIjoiZmFicmF6IiwiaWF0IjoxNzEzODI4NzIyLCJleHAiOjE3MTY0MjA3MjIsInN1YiI6ImNhNThhNmI0LTQ0YjQtNDQ0Yy1hMjNhLWRmNmVlNDFlODczOCJ9.VoWWQ4S04tCThb8TMkJPjWeuljO-GCvMtyMb4paB-JA