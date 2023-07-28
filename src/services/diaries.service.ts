import { DiaryEntry, NewDiary, NonCommentInfoDiaryEntry } from '../types';
import diaryData from './diaries.json'

const diaries : DiaryEntry[ ]= diaryData as DiaryEntry[ ];

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number) : DiaryEntry => {
    const entry= diaries.find(diary => diary.id === id)
    return entry 
}

export const getEntriesWithoutComments = (): NonCommentInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility} ) =>{
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (diaryEntry: NewDiary) : DiaryEntry => {
    const newDiaryEntry = {
        id: Math.max(...diaries.map(diary => diary.id)) + 1,
        ...diaryEntry
    }
    console.log(newDiaryEntry);
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
