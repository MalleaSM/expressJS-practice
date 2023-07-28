import { NewDiary, Visibility, VisibilityEnum, Weather, WeatherEnum } from "./types";

const parseComment = (commentFromRequest:any):string  => {
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest) ){
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest) ){
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest
}

const isString = (string: String):boolean => {
    return typeof string == 'string';
    // if(typeof(string) == 'string'|| string instanceof String){

    // }
}

const isDate = (date: string):boolean => {
    return Boolean(Date.parse(date));
}

const isWeather = (weather: any): Boolean => {
    return Object.values(WeatherEnum).includes(weather);
}

const isVisibility = (visibility: any): Boolean => {
    return Object.values(VisibilityEnum).includes(visibility);
}

const toNewDiaryEntry = (object: any) : NewDiary => {
    const newEntry: NewDiary = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newEntry;
}
export default toNewDiaryEntry