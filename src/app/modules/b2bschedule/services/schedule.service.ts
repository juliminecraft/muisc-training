import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {       
    private lessonsStorageName: string = 'lessons';
    private scheduleStorageName: string = 'schedule';

    scheduleTypeSub = new BehaviorSubject<BassBuzzScheduleEnum>(BassBuzzScheduleEnum.Unknown);

    constructor() { 
        const scheduleType = this.getScheduleType();
        this.scheduleTypeSub.next(scheduleType);
    }

    resetAllData() {
        localStorage.clear();
        this.changeScheduleType(BassBuzzScheduleEnum.Unknown);        
    } 

    private getScheduleType(): BassBuzzScheduleEnum {
        const value = +localStorage.getItem(this.scheduleStorageName);
        if(value){
            return <BassBuzzScheduleEnum>value;
        } else {
            return BassBuzzScheduleEnum.Unknown;
        }
    }

    private saveScheduleType(type: BassBuzzScheduleEnum) {
        localStorage.setItem(this.scheduleStorageName, type.toString());
    }

    changeScheduleType(type: BassBuzzScheduleEnum): any {
        this.saveScheduleType(type);
        this.scheduleTypeSub.next(type);
    }

    getLessons(): Lesson[] {
        const savedLessons = this.getSavedLessons();
        if(savedLessons.length === 0) {
            const generatedLessons = this.generateNewSetLessons();
            this.saveLessons(generatedLessons);
        }

        return this.getSavedLessons();
    }

    changeLessonStatus(id: string, isDone: boolean) {
        const lessons = this.getSavedLessons();
        const lesson = lessons.find(x => x.id === id);
        lesson.done = isDone;
        this.saveLessons(lessons);
    }

    private getSavedLessons(): Lesson[] {
        const json = localStorage.getItem(this.lessonsStorageName);
        if (json) {
            return JSON.parse(json);
        } else {
            return [];
        }
    }

    private saveLessons(lessons: Lesson[]) {
        const json = JSON.stringify(lessons);
        localStorage.setItem(this.lessonsStorageName, json);
    }   

    private generateNewSetLessons(): Lesson[] {
        let lessons: Lesson[] = [];

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(1, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(2, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(3, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(4, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(5, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(6, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(7, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(8, i));
        }

        for (let i = 1; i < 8; i++) {
            lessons.push(new Lesson(9, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(10, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(11, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(12, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(13, i));
        }

        for (let i = 1; i < 5; i++) {
            lessons.push(new Lesson(14, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(15, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(16, i));
        }

        return lessons;
    }
}

export class Lesson {
    constructor(
        public module: number,
        public lesson: number) {
        this.id = `M${module}-L${lesson}`;
    }

    id: string;
    done: boolean = false;
}

export enum BassBuzzScheduleEnum {
    Unknown = 0,
    OneMonth = 1,
    ThreeMonth = 2,
    SixMonth = 3
}