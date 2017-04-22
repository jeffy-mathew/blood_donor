/**
 * time-picker.component
 */

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as moment from 'moment/moment';
import { Moment } from 'moment/moment';

/*
declare let require: any;
const myDpStyles: string = require("./time-picker.component.scss");
const myDpTpl: string = require("./time-picker.component.html");
*/

@Component({
    selector: 'time-picker',
    template: `<picker-modal (onOverlayClick)="cancelTimePicker()"><div class="picker-wrap"><div class="picker-box"><div class="picker-header">Time Picker</div><div class="picker-table"><ul class="picker-table-time"><li class="picker-table-number hour"><span class="arrow up" (click)="increaseHour()"></span> {{time | moment: hourFormat}} <span class="arrow down" (click)="decreaseHour()"></span></li><li class="picker-table-separator">:</li><li class="picker-table-number minute"><span class="arrow up" (click)="increaseMinute()"></span> {{time | moment: 'mm'}} <span class="arrow down" (click)="decreaseMinute()"></span></li><li *ngIf="showSecond" class="picker-table-separator">:</li><li *ngIf="showSecond" class="picker-table-number second"><span class="arrow up" (click)="increaseSecond()"></span> {{time | moment: 'ss'}} <span class="arrow down" (click)="decreaseSecond()"></span></li><li *ngIf="use12Hour" class="picker-table-meridiem meridiem">{{time | moment: 'A'}}</li></ul></div><div class="picker-footer"><div class="picker-action action-now" (click)="selectNow()"><span class="text">Now</span></div><div class="picker-action action-confirm" (click)="selectTime()"><span class="text">Confirm</span></div><div class="picker-action action-clear" (click)="clearTime()"><span class="text">Clear</span></div><div class="picker-action action-close" (click)="cancelTimePicker()"><span class="text">Close</span></div></div></div></div></picker-modal>`,
    styles: [`.picker-header,.picker-table-meridiem,.picker-table-number,.picker-table-separator{text-align:center}*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}.picker-wrap{width:95vw;max-width:640px;max-width:40rem;font-family:'Open Sans'}.picker-box{width:100%;padding:10px 16px;padding:.625rem 1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker-footer,.picker-header{font-size:21.33px;font-size:1.333rem;line-height:40px;line-height:2.5rem;height:40px;height:2.5rem;width:100%}.picker-table{width:100%;margin:40px 0;margin:2.5rem 0}.picker-table-time{font-size:37.92px;font-size:2.37rem;line-height:40px;line-height:2.5rem;list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker-table-meridiem,.picker-table-number{position:relative;width:20%}.arrow{position:absolute;left:50%;border:solid #777;border-width:0 3.2px 3.2px 0;border-width:0 .2rem .2rem 0;display:inline-block;padding:4px;padding:.25rem;cursor:pointer}.arrow.up{top:-16px;top:-1rem;-webkit-transform:translateX(-50%) rotate(-135deg);-moz-transform:translateX(-50%) rotate(-135deg);-ms-transform:translateX(-50%) rotate(-135deg);transform:translateX(-50%) rotate(-135deg)}.arrow.down{bottom:-16px;bottom:-1rem;-webkit-transform:translateX(-50%) rotate(45deg);-moz-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg)}.arrow:hover{border-color:#1975d2}.picker-table-separator{width:-webkit-calc(20% / 3);width:-moz-calc(20% / 3);width:calc(20% / 3)}.picker-footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;cursor:pointer}.picker-footer .picker-action{width:25%;text-align:center}.picker-footer .picker-action:hover{background-color:#b1dcfb}.picker-footer .picker-action .text{padding-left:12.8px;padding-left:.8rem}.picker-footer .action-clear::before,.picker-footer .action-close::before,.picker-footer .action-confirm::before,.picker-footer .action-now::before{content:" ";position:relative;display:inline-block;height:0;width:0}.picker-footer .action-now::before{border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker-footer .action-confirm::before{width:16px;width:1rem;height:16px;height:1rem;-moz-border-radius:100%;border-radius:100%;background-color:#00B5AD}.picker-footer .action-clear::before{top:-8px;top:-.5rem;width:16px;width:1rem;border-top:3px solid #e20}.picker-footer .action-close::before{width:16px;width:1rem;height:16px;height:1rem;background:-webkit-linear-gradient(top,transparent 35%,#777 35%,#777 65%,transparent 65%),-webkit-linear-gradient(left,transparent 35%,#777 35%,#777 65%,transparent 65%);background:-moz-linear-gradient(top,transparent 35%,#777 35%,#777 65%,transparent 65%),-moz-linear-gradient(left,transparent 35%,#777 35%,#777 65%,transparent 65%);background:linear-gradient(to bottom,transparent 35%,#777 35%,#777 65%,transparent 65%),linear-gradient(to right,transparent 35%,#777 35%,#777 65%,transparent 65%);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}`],
})

export class TimePickerComponent implements OnInit {

    @Input() initTime: any;
    @Input() showSecond: boolean = true;
    @Input() viewFormat: string = 'hh:mm A';
    @Input() use12Hour: boolean = false;
    @Input() returnObject: string = 'js';
    @Output() onSelectTime = new EventEmitter<any>();
    @Output() onTimePickerCancel = new EventEmitter<boolean>();
    hourFormat = 'HH';
    private time: Moment;

    constructor() {
    }

    ngOnInit(): void {
        if(this.use12Hour) this.hourFormat = 'hh';
        this.time = this.initTime ? moment(this.initTime, this.viewFormat) : moment();

        // check if the input initDate has value
        if (this.initTime) {
            this.time = this.returnObject === 'string'? moment(this.initTime, this.viewFormat):
                moment(this.initTime);
        } else {
            this.time = moment();
        }
    }

    increaseHour(): void {
        this.time = this.time.clone().add(1, 'h');
    }

    decreaseHour(): void {
        this.time = this.time.clone().subtract(1, 'h');
    }

    increaseMinute() {
        this.time = this.time.clone().add(1, 'm');
    }

    decreaseMinute() {
        this.time = this.time.clone().subtract(1, 'm');
    }

    increaseSecond(): void {
        this.time = this.time.clone().add(1, 's');
    }

    decreaseSecond(): void {
        this.time = this.time.clone().subtract(1, 's');
    }

    selectTime(): void {
        let selectTime = this.parseToReturnObjectType(this.time);
        this.onSelectTime.emit(selectTime);
        this.cancelTimePicker();
        return;
    }

    selectNow(): void {
        let selectTime = this.parseToReturnObjectType(moment());
        this.onSelectTime.emit(selectTime);
        this.cancelTimePicker();
        return;
    }

    clearTime(): void {
        this.onSelectTime.emit(null);
        this.cancelTimePicker();
        return;
    }

    cancelTimePicker(): void {
        this.onTimePickerCancel.emit(false);
        return;
    }

    protected parseToReturnObjectType(time: Moment): any {
        switch (this.returnObject) {
            case 'js':
                return time.toDate();

            case 'string':
                return time.format(this.viewFormat);

            case 'moment':
                return time;

            case 'json':
                return time.toJSON();

            case 'array':
                return time.toArray();

            case 'iso':
                return time.toISOString();

            case 'object':
                return time.toObject();

            default:
                return time;
        }
    }

}
