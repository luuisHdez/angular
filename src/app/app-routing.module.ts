import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouting } from './auth/auth.routing';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { PagesRoutingModule } from './pages/pages-routing';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotPageFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRouting
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
