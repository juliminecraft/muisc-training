import { Component, OnInit, Input } from '@angular/core';
import { Lesson, ScheduleService } from '../../services/schedule.service';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
    @Input() lesson: Lesson;

    isChecked: boolean;

    constructor(private readonly scheduleService: ScheduleService) { }

    ngOnInit() {
        this.isChecked = this.lesson.done;
    }

    lessonChanged(): boolean {
        this.scheduleService.changeLessonStatus(this.lesson.id, this.isChecked);
        return false;
    }

}
