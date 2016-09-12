import {Directive, Input, ElementRef} from '@angular/core';
import {DisplayPosition, BComponentInputs} from '../bcomponent';

@Directive({
    selector: '[bc-tooltip]',
    inputs: BComponentInputs
})
export class TooltipBDirective {
    @Input() position: DisplayPosition = "bottom";
    @Input('bc-tooltip') bcTooltip: string;
    @Input('tooltip-text') tooltipText: string;

    private el: ElementRef;

    constructor(el: ElementRef) {
        this.el = el;
    }

    private setAttribute = (attr: string, value: string) => {
        $(this.el.nativeElement).attr(attr, value);
    }

    ngAfterViewInit() {
        this.setAttribute('data-toggle', 'tooltip');
        this.setAttribute('title', this.bcTooltip);
        this.setAttribute('data-placement', this.position);
        $(this.el.nativeElement).tooltip();
    }
}