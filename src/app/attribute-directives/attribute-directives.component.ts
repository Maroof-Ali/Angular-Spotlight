import { Component } from "@angular/core";

@Component({
    selector : 'attribute-directives',
    templateUrl : 'attribute-directives.component.html',
    styleUrls : ['attribute-directives.component.css'],
})

export class AttributeDirectivesComponent{
    constructor(){}

    users = [
        {
            "id" : 1,
            "name" : "Maroof Ali",
            "status" : "online"
        },
        {
            "id" : 1,
            "name" : "Micheal",
            "status" : "online"
        },
        {
            "id" : 1,
            "name" : "Jordan",
            "status" : "offline"
        },
        {
            "id" : 1,
            "name" : "Aaron",
            "status" : "online"
        },
        {
            "id" : 1,
            "name" : "Gal",
            "status" : "offline"
        },
    ];

    inputName:any = ''; 

}