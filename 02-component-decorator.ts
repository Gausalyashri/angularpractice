// 02 - COMPONENT DECORATOR OPTIONS
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.Emulated,      // default: styles scoped to component
  changeDetection: ChangeDetectionStrategy.OnPush // only re-render on input/reference change
})
export class SettingsComponent {}

// Standalone component (Angular 14+, no NgModule needed)
@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [],           // import other standalone components/directives/pipes here
  template: `<p>I am standalone</p>`
})
export class StandaloneComponent {}
