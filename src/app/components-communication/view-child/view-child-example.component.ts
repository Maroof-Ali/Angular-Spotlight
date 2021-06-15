import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector : 'view-child-demo',
    templateUrl : 'view-child-example.component.html'
})

export class ViewChildDemoComponent {

    @ViewChild('heading', {static:true}) heading : any;
    @ViewChild('inputField', {static:true}) inputField : any;


    constructor(){}

    show(){
        console.log(this.heading);
        console.log(this.inputField);
        
    }

    changeHeadingText(){
        this.heading.nativeElement.innerText = "Heading changed";
    }

    disableInput(){
        this.inputField.nativeElement.disabled = true;
    }

}