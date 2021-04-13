import { Router } from 'express';
import { cities, health } from '../controllers';

const router = Router();

router.get('/hc', health);
router.get('/cities', cities);

export default router;
