import { Component } from "@angular/core";

@Component({
    selector : 'parent',
    templateUrl : './parent.component.html'
})

export class ParentComponent {

    messageToChild : any;

    constructor(){}

    sendMessage(){
        console.log(this.messageToChild);
    }
    
}