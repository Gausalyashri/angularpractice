// 19 - READING ROUTE PARAMS & NAVIGATION
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `<p>User ID: {{ userId }}</p>`
})
export class UserDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  userId!: string;

  constructor() {
    // snapshot: value at the moment the component loaded
    this.userId = this.route.snapshot.paramMap.get('id')!;

    // observable: reacts if params change while component stays alive
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
    });

    // query params: /search?q=angular
    this.route.queryParamMap.subscribe(qp => {
      console.log(qp.get('q'));
    });
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }

  goWithQuery(): void {
    this.router.navigate(['/search'], { queryParams: { q: 'angular' } });
  }
}
