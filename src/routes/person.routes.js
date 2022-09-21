import {Router} from 'express'
import {createPerson, getAllPersons, updatePerson, getPerson, deletePerson} from '../controllers/person.controllers.js'
const router = Router()

router.get('/person', getAllPersons);
router.get('/person/:id', getPerson);
router.post('/person', createPerson);
router.put('/person/:id', updatePerson);
router.delete('/person/:id', deletePerson);



export default router;


