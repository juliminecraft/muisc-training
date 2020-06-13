import { Component, OnInit } from '@angular/core';

import { ScheduleService, BassBuzzScheduleEnum } from '../../services/schedule.service';

@Component({
    selector: 'app-reseter',
    templateUrl: './reseter.component.html',
    styleUrls: ['./reseter.component.scss']
})
export class ReseterComponent implements OnInit {
    processingDeleteAllData: boolean = false;

    constructor(private readonly scheduleService: ScheduleService) { }

    ngOnInit() {
    }

    resetSchedule(): boolean {
        this.scheduleService.changeScheduleType(BassBuzzScheduleEnum.Unknown);
        return false;
    }

    deleteAllData(): boolean {
        this.processingDeleteAllData = true;
        return false;
    }

    validateDeleteAllData(): boolean {
        this.scheduleService.resetAllData();
        return false;
    }

    cancelDeleteAllData(): boolean {
        this.processingDeleteAllData = false;
        return false;
    }
}
