import { Component } from "@angular/core";

@Component({
    selector : 'structural-directives',
    templateUrl : 'structural-directives.component.html'
})

export class StructuralDirectivesComponent{
    constructor(){}

    items = ['wheat','rices','pulses','corn'];
    number:any = 2;
    condition = true;
    people = [
        {
          "name": "Maroof Ali",
          "country": 'PAK'
        },
        {
          "name": "Liza",
          "age": 32,
          "country": 'USA'
        },
        {
          "name": "Chang",
          "age": 21,
          "country": 'HK'
        },
        {
          "name": "Andrew Miller",
          "age": 34,
          "country": 'UK'
        },
        {
          "name": "Mike Scofield",
          "age": 32,
          "country": 'USA'
        }
      ];

    userInput(event:any){
        let value = (<HTMLInputElement>event.target).value;
        this.number = value;
    }

    toggleThenElseBlock(){
        (this.condition == true) ? (this.condition = false) : (this.condition = true);
    }

}