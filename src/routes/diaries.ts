import express from 'express';
import * as diaryServices from '../services/diaries.service'
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutComments());
})

router.get('/:id', (req, res) =>{
    const diary = diaryServices.findById(+req.params.id);
    return (diary != null) ? res.send(diary): res.sendStatus(404);
})

router.post('/', (req, res) => {
    try {
        const diaryPostEntry = toNewDiaryEntry(req.body); 
        const addedDiaryEntry = diaryServices.addDiary(diaryPostEntry);
        res.json(addedDiaryEntry);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

export default router;
