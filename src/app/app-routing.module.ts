import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeniedComponent } from './denied/denied.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'access-denied', component: DeniedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
