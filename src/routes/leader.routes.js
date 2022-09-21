import { Router } from 'express'
import { getAllLeader, createLeader, deleteLeader, updateLeader, getLeader} from '../controllers/leader.controllers.js'

const router = Router()

router.get('/leader', getAllLeader);
router.get('/leader/:id', getLeader);
router.post('/leader', createLeader);
router.put('/leader/:id', updateLeader);
router.delete('/leader/:id', deleteLeader);

export default router