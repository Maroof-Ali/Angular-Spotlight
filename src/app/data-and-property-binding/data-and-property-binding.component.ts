import { Component } from "@angular/core";

@Component({
    selector : 'data-property-binding',
    templateUrl : './data-and-property-binding.component.html'
})

export class DataAndPropertyBinding {

    user = {
        name : "Maroof Ali",
        profession : "Software Engineer",
        age : 23
    }

    disableButton = false;

    constructor(){
        setTimeout(()=>{
            this.disableButton = true
        },3000); //time in milli seconds
    }




}