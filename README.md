# Angular Syntax Practice

23 standalone files, each covering one Angular syntax topic. Read top to bottom, in order — later files build on earlier concepts.

| # | File | Topic |
|---|------|-------|
| 01 | `01-component-basics.ts` | Component decorator, class, inline template |
| 02 | `02-component-decorator.ts` | Encapsulation, change detection, standalone components |
| 03 | `03-interpolation.html` | `{{ }}` interpolation |
| 04 | `04-property-binding.html` | `[property]` binding |
| 05 | `05-event-binding.html` | `(event)` binding |
| 06 | `06-two-way-binding.html` | `[(ngModel)]` two-way binding |
| 07 | `07-ngif.html` | `*ngIf` / `@if` |
| 08 | `08-ngfor.html` | `*ngFor` / `@for` |
| 09 | `09-ngswitch.html` | `ngSwitch` / `@switch` |
| 10 | `10-ngclass.html` | `ngClass` |
| 11 | `11-ngstyle.html` | `ngStyle` |
| 12 | `12-input-decorator.ts` | `@Input()` |
| 13 | `13-output-decorator.ts` | `@Output()` + `EventEmitter` |
| 14 | `14-viewchild.ts` | `@ViewChild` / `@ViewChildren` |
| 15 | `15-lifecycle-hooks.ts` | All lifecycle hooks in order |
| 16 | `16-services-di.ts` | Services & dependency injection |
| 17 | `17-http-client.ts` | `HttpClient` CRUD calls |
| 18 | `18-routing.ts` | Route configuration |
| 19 | `19-route-params.ts` | Reading params, navigation |
| 20 | `20-reactive-forms.ts` | `FormBuilder`, `FormGroup`, `FormArray` |
| 21 | `21-template-driven-forms.html` | `ngForm`, `ngModel` validation |
| 22 | `22-pipes-builtin.html` | Built-in pipes, chaining, `async` |
| 23 | `23-custom-pipe.ts` | Writing a custom `Pipe` |

## How to use
1. Unzip and push to a GitHub repo (or upload the zip directly and extract there).
2. Copy snippets into a real Angular project (`ng new my-app`) to try them live, since these are isolated syntax references rather than a runnable app on their own.
3. Work through files in order for a rough learning path: template syntax (03–11) → component communication (12–14) → lifecycle & services (15–16) → HTTP & routing (17–19) → forms & pipes (20–23).
