// 12 - @Input DECORATOR (parent -> child data)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ label }}: {{ value }}</p>`
})
export class ChildComponent {
  @Input() label!: string;
  @Input() value: number = 0;

  // aliasing an input name
  @Input('userId') id!: string;

  // input with a setter for side effects
  private _score = 0;
  @Input()
  set score(val: number) {
    this._score = val;
    console.log('score changed to', val);
  }
  get score(): number {
    return this._score;
  }
}

// Usage in parent template:
// <app-child [label]="'Total'" [value]="42" [userId]="'u1'"></app-child>
