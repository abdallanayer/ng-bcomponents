import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

@Component({
    selector: 'breadcrumb-bcomponent',
    templateUrl: 'breadcrumb.bcomponent.html',
    directives: [BComponentAttributes, LinkBComponent],
    inputs: BComponentInputs.concat('items', 'active')
})
export class BreadcrumbBComponent extends BComponent {
    public items: LinkBComponent[];
    public active: string;

    constructor() {
        super("breadcrumb");
    }

    public Initialize = (items: LinkBComponent[] = null, active: string = null): BreadcrumbBComponent => {
        this.items = items;
        this.active = active;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }
}