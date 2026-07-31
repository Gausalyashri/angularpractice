// 15 - LIFECYCLE HOOKS
import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  SimpleChanges, Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: `<p>Watch the console</p>`
})
export class LifecycleDemoComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() value!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChanges', changes); // runs before ngOnInit, and on every @Input change
  }
  ngOnInit(): void {
    console.log('2. ngOnInit'); // runs once, after first ngOnChanges
  }
  ngDoCheck(): void {
    console.log('3. ngDoCheck'); // runs on every change detection cycle
  }
  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit'); // after content projected via <ng-content> is initialized
  }
  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit'); // after component's view (and child views) initialized
  }
  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('8. ngOnDestroy'); // cleanup: unsubscribe, clear timers, etc.
  }
}
