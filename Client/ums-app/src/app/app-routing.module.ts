import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '**', component: EmptyRouteComponent },
  { path: '', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RegisterComponent, LoginComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule, RegisterComponent, LoginComponent],
})
export class AppRoutingModule {}
