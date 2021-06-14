import { Component } from "@angular/core";

@Component({
    selector : 'parent',
    templateUrl : './parent.component.html'
})

export class ParentComponent {

    messageToChild : any;

    messageReceivedFromChild : any;

    constructor(){}

    receiveMessage(value : any){
        this.messageReceivedFromChild = value;
    }

}