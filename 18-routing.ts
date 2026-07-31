// 18 - ROUTING BASICS
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users/:id', loadComponent: () => import('./user-detail.component').then(m => m.UserDetailComponent) },
  { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES) },
  { path: '**', component: NotFoundComponent } // wildcard, must be last
];

// app.config.ts
// providers: [provideRouter(routes)]

// template usage:
// <a routerLink="/about" routerLinkActive="active">About</a>
// <router-outlet></router-outlet>
