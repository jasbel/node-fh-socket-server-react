/* 
  Path: api/messages
*/
import { Router } from 'express';
import { validateJWT } from '../../middlewares/validate-jwt';
import { getChat } from './message.controller';

const router = Router();

router.get('/:from', validateJWT, getChat);

export default router;
