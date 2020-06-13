import { Component, OnInit, Input } from '@angular/core';

import { ScheduleService, Lesson, BassBuzzScheduleEnum } from '../../services/schedule.service';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    @Input() scheduleType: BassBuzzScheduleEnum;
    days: Day[] = [];
    weeks: Week[] = [];

    constructor(
        private readonly scheduleService: ScheduleService) {
    }

    ngOnInit() {
        const lessons = this.scheduleService.getLessons();
        switch (this.scheduleType) {
            case BassBuzzScheduleEnum.OneMonth:
                this.setOneMonth(lessons);
                break;
            case BassBuzzScheduleEnum.ThreeMonth:
                this.setThreeMonth(lessons);
                break;
            case BassBuzzScheduleEnum.SixMonth:
                this.setSixMonth(lessons);
                break;

        }
    }

    setSixMonth(lessons: Lesson[]): void {
        let splited = this.arrayTo2DArray1(lessons, 7);

        let i = 0;
        splited.forEach(x => {
            i++;
            this.weeks.push(new Week(i, x.slice(0, 3)));
            i++;
            this.weeks.push(new Week(i, x.slice(3, 7)));
        });

    }

    setThreeMonth(lessons: Lesson[]): void {
        let splited = this.arrayTo2DArray1(lessons, 7);
        let i = 0;
        splited.forEach(x => {
            i++;
            this.weeks.push(new Week(i, x));
        });
    }

    setOneMonth(lessons: Lesson[]): void {
        let splited = this.arrayTo2DArray1(lessons, 3);
        let i = 0;
        splited.forEach(x => {
            i++;
            this.days.push(new Day(i, x));
        });
    }

    private arrayTo2DArray1(list, howMany) {
        let idx = 0
        let result = [];

        while (idx < list.length) {
            if (idx % howMany === 0) result.push([])
            result[result.length - 1].push(list[idx++])
        }

        return result
    }

}

class Day {
    constructor(
        public name: number,
        public readonly lessons: Lesson[]) {
    }
}


class Week {
    constructor(
        public name: number,
        public readonly lessons: Lesson[]) {
    }
}