import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector : 'child',
    templateUrl : './child.component.html'
})

export class ChildComponent {
    @Input() message : any;
    @Input('name') name : any;
    @Input('status') status : any; 

    @Output() childOutputToParent = new EventEmitter<any>();

    messageToParent : any;

    constructor(){}

    sendMessage(message : any){
        this.childOutputToParent.emit(message);
    }

}