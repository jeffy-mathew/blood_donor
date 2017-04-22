/**
 * date-picker.component
 */

import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import * as moment from 'moment/moment';
import { Moment } from 'moment/moment';

/*
declare let require: any;
const myDpStyles: string = require("./date-picker.component.scss");
const myDpTpl: string = require("./date-picker.component.html");
*/

@Component({
    selector: 'date-picker',
    template: `<picker-modal (onOverlayClick)="cancelDatePicker()"><div class="picker-wrap"><div class="picker-box"><div class="picker-header"><div class="picker-header-nav"><span class="nav-prev" (click)="prevMonth()"></span></div><div class="picker-header-content"><div class="content"><span class="month">{{calendarDate | moment: "MMMM"}}</span> <span class="year">{{calendarDate | moment: "YYYY"}}</span></div></div><div class="picker-header-nav"><span class="nav-next" (click)="nextMonth()"></span></div></div><div class="picker-calendar"><div class="picker-calendar-row"><span class="picker-weekday" *ngFor="let day of dayNames">{{ day }}</span></div><div class="picker-calendar-row"><span class="picker-day" (click)="selectDay(day)" [ngClass]="{
                       'out-focus': day.month() != calendarDate.month(),
                       'today': day.isSame(today),
                       'selected': day.isSame(selectedDate)
                      }" *ngFor="let day of calendarDays">{{ day | moment: 'D'}}</span></div></div><div class="picker-footer"><div class="picker-action action-today" (click)="selectToday()"><span class="text">Today</span></div><div class="picker-action action-clear" (click)="clearPickDate()"><span class="text">Clear</span></div><div class="picker-action action-close" (click)="cancelDatePicker()"><span class="text">Close</span></div></div></div></div></picker-modal>`,
    styles: [`*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}.picker-wrap{width:95vw;max-width:666px}.picker-box{font-family:'Open Sans';width:100%;padding:10px 16px;padding:.625rem 1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker-footer,.picker-header{font-size:21.33px;font-size:1.333rem;line-height:40px;line-height:2.5rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:40px;height:2.5rem;width:100%}.picker-header-nav{position:relative;cursor:pointer;width:-webkit-calc(100% / 8);width:-moz-calc(100% / 8);width:calc(100% / 8)}.picker-header-nav>*{position:absolute;top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.picker-header-nav .nav-next::before,.picker-header-nav .nav-prev::before{content:" ";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:.75em solid #000;width:0;height:0;display:block;margin:0 auto}.picker-header-nav .nav-next::before{border-right:0;border-left:.75em solid #000}.picker-header-content{width:-webkit-calc(100% * 6 / 8);width:-moz-calc(100% * 6 / 8);width:calc(100% * 6 / 8);text-align:center}.picker-header-content .month{font-size:28.45px;font-size:1.778rem;line-height:40px;line-height:2.5rem;margin-right:8px;margin-right:.5rem;font-weight:700}.picker-header-content .year{font-style:italic;color:#999}.picker-calendar{width:100%}.picker-calendar .picker-calendar-row{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;margin-bottom:10px;margin-bottom:.625rem}.picker-calendar .picker-weekday{font-weight:700;text-align:left;color:#999;width:-webkit-calc(100% / 7);width:-moz-calc(100% / 7);width:calc(100% / 7)}.picker-calendar .picker-day{font-size:21.33px;font-size:1.333rem;line-height:40px;line-height:2.5rem;position:relative;height:40px;height:2.5rem;text-align:center;cursor:pointer;width:-webkit-calc(100% / 7);width:-moz-calc(100% / 7);width:calc(100% / 7)}.picker-calendar .picker-day:hover{background:#b1dcfb}.picker-calendar .out-focus{color:#ddd}.picker-calendar .out-focus:hover{color:#000}.picker-calendar .selected{background:#0089ec;color:#fff}.picker-calendar .selected:hover{background:#0089ec}.picker-calendar .today::before{content:" ";position:absolute;top:2px;right:2px;width:0;height:0;border-top:.5em solid #0059bc;border-left:.5em solid transparent}.picker-footer{cursor:pointer}.picker-footer .picker-action{text-align:center;width:-webkit-calc(100% / 3);width:-moz-calc(100% / 3);width:calc(100% / 3)}.picker-footer .picker-action:hover{background-color:#b1dcfb}.picker-footer .picker-action .text{padding-left:12.8px;padding-left:.8rem}.picker-footer .action-clear::before,.picker-footer .action-close::before,.picker-footer .action-today::before{content:" ";position:relative;display:inline-block;height:0;width:0}.picker-footer .action-today::before{border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker-footer .action-clear::before{top:-8px;top:-.5rem;width:16px;width:1rem;border-top:3px solid #e20}.picker-footer .action-close::before{width:16px;width:1rem;height:16px;height:1rem;background:-webkit-linear-gradient(top,transparent 35%,#777 35%,#777 65%,transparent 65%),-webkit-linear-gradient(left,transparent 35%,#777 35%,#777 65%,transparent 65%);background:-moz-linear-gradient(top,transparent 35%,#777 35%,#777 65%,transparent 65%),-moz-linear-gradient(left,transparent 35%,#777 35%,#777 65%,transparent 65%);background:linear-gradient(to bottom,transparent 35%,#777 35%,#777 65%,transparent 65%),linear-gradient(to right,transparent 35%,#777 35%,#777 65%,transparent 65%);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}`],
})

export class DatePickerComponent implements OnInit {

    dayNames: Array<string>;

    @Input() initDate: any;
    @Input() locale: string = 'en';
    @Input() viewFormat: string = 'll';
    @Input() returnObject: string = 'js';
    @Output() onDatePickerCancel = new EventEmitter<boolean>();
    @Output() onSelectDate = new EventEmitter<any>();

    calendarDate: Moment;
    selectedDate: Moment;
    today: Moment;
    calendarDays: Array<Moment>;

    constructor() {
    }

    ngOnInit(): void {
        this.initValue();
        this.generateCalendar();
    }

    prevMonth(): void {
        this.calendarDate = this.calendarDate.clone().subtract(1, 'M');
        this.generateCalendar();
    }

    nextMonth(): void {
        this.calendarDate = this.calendarDate.clone().add(1, 'M');
        this.generateCalendar();
    }

    selectDay( day: Moment ): void {
        let daysDifference = day.diff(this.calendarDate.clone().startOf('date'), 'days');
        day = this.calendarDate.clone().add(daysDifference, 'd');
        let selectedDay = this.parseToReturnObjectType(day);
        this.onSelectDate.emit(selectedDay);
        this.cancelDatePicker();
        return;
    }

    selectToday(): void {
        let today = this.parseToReturnObjectType(moment());
        this.onSelectDate.emit(today);
        this.cancelDatePicker();
        return;
    }

    clearPickDate(): void {
        this.onSelectDate.emit(null);
        this.cancelDatePicker();
        return;
    }

    cancelDatePicker(): void {
        this.onDatePickerCancel.emit(false);
        return;
    }

    protected initValue() {

        // set moment locale (default is en)
        moment.locale(this.locale);

        // set today value
        this.today = moment().startOf('date');

        // set week days name array
        this.dayNames = moment.weekdaysShort(true);

        // check if the input initDate has value
        if (this.initDate) {
            this.calendarDate = this.returnObject === 'string'? moment(this.initDate, this.viewFormat):
                moment(this.initDate);
            this.selectedDate = this.calendarDate.clone().startOf('date');
        } else {
            this.calendarDate = moment();
        }
    }

    protected generateCalendar(): void {
        this.calendarDays = [];
        let start = 0 - (this.calendarDate.clone().startOf('month').day() + (7 - moment.localeData().firstDayOfWeek())) % 7;
        let end = 41 + start; // iterator ending point

        for (let i = start; i <= end; i += 1) {
            let day = this.calendarDate.clone().startOf('month').add(i, 'days');
            this.calendarDays.push(day);
        }
    }

    protected parseToReturnObjectType(day: Moment): any {
        switch (this.returnObject) {
            case 'js':
                return day.toDate();

            case 'string':
                return day.format(this.viewFormat);

            case 'moment':
                return day;

            case 'json':
                return day.toJSON();

            case 'array':
                return day.toArray();

            case 'iso':
                return day.toISOString();

            case 'object':
                return day.toObject();

            default:
                return day;
        }
    }
}
