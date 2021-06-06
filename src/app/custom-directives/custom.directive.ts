import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[highlighter]'
})

export class HighlighterDirective implements OnInit{

    constructor(private elementRef : ElementRef){}

    ngOnInit():void{
        this.elementRef.nativeElement.style.backgroungColor = 'yellow';
    }

} 