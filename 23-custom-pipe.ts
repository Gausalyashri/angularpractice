// 23 - CUSTOM PIPE
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true // omit or set false if using NgModules
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20, suffix: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.slice(0, limit) + suffix : value;
  }
}

// Usage in template:
// <p>{{ longDescription | truncate:50 }}</p>
// <p>{{ longDescription | truncate:50:'…' }}</p>
