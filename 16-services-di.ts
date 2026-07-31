// 16 - SERVICES & DEPENDENCY INJECTION
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // singleton, tree-shakable, available app-wide
})
export class DataService {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }
}

// Injecting into a component (constructor injection)
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `<li *ngFor="let i of dataService.getItems()">{{ i }}</li>`
})
export class ListComponent {
  constructor(private dataService: DataService) {}
}

// Newer functional injection style (Angular 14+)
import { inject } from '@angular/core';

@Component({ selector: 'app-list2', template: '' })
export class ListComponent2 {
  private dataService = inject(DataService);
}
