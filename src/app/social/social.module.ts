import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social.component';
import {SocialService} from '../services/social.service';

@NgModule({
  declarations: [SocialComponent],
  imports: [
    CommonModule
  ],
  exports: [SocialComponent]
})
export class SocialModule {
  static forRoot(config) {
    return {
      ngModule: SocialModule,
      providers: [SocialService, {provide: 'config', useValue: config}]
    };
  }
}
