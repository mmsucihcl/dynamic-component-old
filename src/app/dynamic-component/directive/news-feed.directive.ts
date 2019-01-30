import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[news-feed]',
})
export class NewsFeedDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

