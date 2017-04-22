/**
 * modal.component
 */

import {
    Component, Output, OnInit, EventEmitter, trigger, transition, style, state, animate,
    ChangeDetectionStrategy
} from "@angular/core";

/*
declare let require: any;
const myDpStyles: string = require("./modal.component.scss");
const myDpTpl: string = require("./modal.component.html");
*/

@Component({
    selector: 'picker-modal',
    template: `<section class="picker-modal"><section class="picker-modal-overlay" (click)="closeModal()"></section><section class="picker-modal-main" [@modalAnimation]="'in'"><ng-content></ng-content></section></section>`,
    styles: [`.picker-modal,.picker-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%}:host{z-index:9999999999}*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}.picker-modal{z-index:99;overflow-y:scroll}.picker-modal-overlay{z-index:11;display:block;background-color:rgba(0,0,0,.3)}.picker-modal-main{position:absolute;top:30px;right:auto;bottom:auto;left:50%;z-index:111;background-color:#fff;border:1px solid #d7dad7;-moz-border-radius:6px;border-radius:6px;-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);-moz-box-shadow:0 5px 15px rgba(0,0,0,.3);box-shadow:0 5px 15px rgba(0,0,0,.3)}`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('modalAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translate(-50%, 0)',
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translate(-50%, -100%)',
                }),
                animate('0.3s cubic-bezier(.13,.68,1,1.53)')
            ])
        ])
    ],
})

export class ModalComponent implements OnInit {

    @Output() onOverlayClick = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    closeModal() {
        this.onOverlayClick.emit(false);
    }
}
