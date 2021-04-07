import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { UsersComponent } from './pages/users/users.component';
import { BrigadiersComponent } from './pages/brigadiers/brigadiers.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { TopbarComponent } from './partials/topbar/topbar.component';
import { NgNavComponent } from './partials/ng-nav/ng-nav.component';
import { NgFooterComponent } from './partials/ng-footer/ng-footer.component';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NotFoundComponent,
    ServerErrorComponent,
    UsersComponent,
    BrigadiersComponent,
    WorkersComponent,
    DashboardsComponent,
    SidenavComponent,
    TopbarComponent,
    NgNavComponent,
    NgFooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    NgNavComponent,
    NgFooterComponent,
    TopbarComponent,
    SidenavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
