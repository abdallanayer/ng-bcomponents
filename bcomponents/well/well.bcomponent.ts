import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplaySize} from '../bcomponent';

@Component({
    selector: "well-bcomponent",
    templateUrl: "well.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'size'])
})
export class WellBComponent extends BComponent {
    public text: string;
    public size: DisplaySize;

    constructor() {
        super("well");
    }

    public Initialize = (text: string = "", size: DisplaySize = null): WellBComponent => {
        this.text = text;
        this.size = size;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        if(this.size !== null) {
            this.baseClass = "well well-" + this.size;
        }
    }
}