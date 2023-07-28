export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good'| 'ok' | 'poor'

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

export type NonCommentInfoDiaryEntry = Omit <DiaryEntry, 'comment'>
export type NewDiary = Omit <DiaryEntry,'id'>

export enum WeatherEnum {
    Sunny ='sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy ='stormy'
}

export enum VisibilityEnum {
    Great='great',
    Good= 'good',
    Ok  =   'ok',
    Poor= 'poor'
}