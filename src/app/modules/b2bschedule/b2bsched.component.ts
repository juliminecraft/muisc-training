import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BassBuzzScheduleEnum, ScheduleService } from './services/schedule.service';
import { PwaService } from './services/pwa.service';


@Component({
    selector: 'app-root',
    templateUrl: './b2bsched.component.html',
    styleUrls: ['./b2bsched.component.scss']
})
export class B2BScheduleComponent implements OnInit, OnDestroy {
    scheduleType: BassBuzzScheduleEnum;
    private scheduleSub: Subscription;

    constructor(
        private readonly scheduleService: ScheduleService, 
        private readonly pwaService: PwaService) {
    }

    ngOnInit(): void {
        this.scheduleSub = this.scheduleService.scheduleTypeSub.subscribe((type: BassBuzzScheduleEnum) => {
            this.scheduleType = type;
        });
    }

    ngOnDestroy(): void {
        this.scheduleSub.unsubscribe();
    }

    selectSchedule(value: BassBuzzScheduleEnum): boolean {
        this.scheduleService.changeScheduleType(value);
        return false;
    }
}

