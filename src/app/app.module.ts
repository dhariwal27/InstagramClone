import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import {SocialModule} from './social/social.module';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialModule.forRoot(environment.facebook)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
