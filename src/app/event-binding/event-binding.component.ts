import { Component } from "@angular/core";

@Component({
    selector : "event-binding",
    templateUrl : "./event-binding.component.html"
})

export class EventBindingComponent {

    count = 0;
    inputValue = "";
    userInputValue = ""

    constructor(){}

    addCount(){
        this.count++;
    }

    showInputEventValue(event : any){
        console.log(event);
        this.inputValue = (<HTMLInputElement>event.target).value;
    }

    showTwoWayDataBinding(event : any){
        this.userInputValue = (<HTMLInputElement>event.target).value;
    }

}