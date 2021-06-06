import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : "lifecycle-hooks",
    templateUrl : "./lifecycle-hooks.component.html"
})

export class LifecycleHooksComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterContentInit,AfterContentChecked,OnDestroy{

    constructor(){
        console.log("I am in constructor");
    }

    ngOnChanges(): void {
        console.log("I am in ngOnChanges");
    }

    ngOnInit(): void {
        console.log("I am in ngOnInit");
    }

    ngDoCheck(): void{
        console.log("I am in ngDoCheck");
    }

    ngAfterContentInit(): void{
        console.log("I am in ngAfterContentInit");
    }

    ngAfterContentChecked(): void{
        console.log("I am in ngAfterContentChecked");
    }

    ngAfterViewInit(): void{
        console.log("I am in ngAfterViewInit");
    }

    ngAfterViewInitChecked(): void{
        console.log("I am in ngAfterViewInitChecked");
    }

    ngOnDestroy(): void{
        console.log("I am in ngOnDestroy");
    }    

}