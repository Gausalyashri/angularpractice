// 14 - @ViewChild / @ViewChildren
import { Component, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <input #nameInput type="text">
    <app-child *ngFor="let i of [1,2,3]"></app-child>
  `
})
export class FormComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild(ChildComponentRef) childComp!: any;
  @ViewChildren(ChildComponentRef) allChildren!: QueryList<any>;

  ngAfterViewInit(): void {
    // safe to access view-queried elements here, not in ngOnInit
    this.nameInput.nativeElement.focus();
    console.log('children count:', this.allChildren.length);
  }
}

declare class ChildComponentRef {}
