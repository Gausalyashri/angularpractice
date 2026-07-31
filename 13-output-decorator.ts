// 13 - @Output DECORATOR (child -> parent events)
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">+</button>
    <span>{{ count }}</span>
  `
})
export class CounterComponent {
  count = 0;

  @Output() countChange = new EventEmitter<number>();
  @Output('counterReachedMax') maxReached = new EventEmitter<void>();

  increment(): void {
    this.count++;
    this.countChange.emit(this.count);
    if (this.count >= 10) {
      this.maxReached.emit();
    }
  }
}

// Usage in parent template:
// <app-counter (countChange)="onCountChange($event)" (counterReachedMax)="onMax()"></app-counter>
