import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrigadiersComponent } from './pages/brigadiers/brigadiers.component';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UsersComponent } from './pages/users/users.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'registration',
    component: SignUpComponent
  },
  
  {
    path: '404',
    component: NotFoundComponent
  },
  
  {
    path: '500',
    component: ServerErrorComponent
  },
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [ 
      {
        path: 'dashboards',
        component: DashboardsComponent,
      },
      {
        path: 'users', 
        component: UsersComponent
      },
      {
        path: 'brigadiers', 
        component: BrigadiersComponent
      },
      {
        path: 'workers', 
        component: WorkersComponent
      }
    ]
  },
  // {
  //   path: 'dashboards',
  //   component: DashboardsComponent,
  // },
  // {
  //   path: 'users', 
  //   component: UsersComponent
  // },
  // {
  //   path: 'brigadiers', 
  //   component: BrigadiersComponent
  // },
  // {
  //   path: 'workers', 
  //   component: WorkersComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
