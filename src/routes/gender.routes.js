import {Router} from 'express'
import {getAllGender, createGender, deleteGender} from '../controllers/gender.controllers.js'
const router = Router()

router.get('/gender', getAllGender);
router.post('/gender',createGender);
router.delete('/gender/:id', deleteGender);


export default router