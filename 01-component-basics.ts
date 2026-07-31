// 01 - COMPONENT BASICS
// Every Angular component needs: decorator, class, template, styles

import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',       // how you use it: <app-hello></app-hello>
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name: string = 'Angular';

  greet(): string {
    return `Hello, ${this.name}!`;
  }
}

// Inline template/style version (no separate files needed)
@Component({
  selector: 'app-inline',
  template: `<h1>{{ title }}</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class InlineComponent {
  title = 'Inline Component';
}
