import {Inject, Injectable} from '@angular/core';
import {SocialModel} from '../models/social-model';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user-model';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  socialConfig: SocialModel;
  userDetails: UserModel = {} as UserModel;

  constructor(@Inject('config') private config: SocialModel) {
    this.socialConfig = config;
  }

  initLibrary(): Observable<any> {
    return new Observable((observer) => {
      const node = document.createElement('script');
      node.type = 'text/javascript';
      node.async = true;
      node.onload = () => {
        FB.init(this.config);
        observer.next();
      };
      node.src = 'https://connect.facebook.net/en_US/sdk.js';
      document.getElementsByTagName('head')[0].appendChild(node);
    });
  }

  login() {
    FB.login((response) => {
      if (response.authResponse) {
        this.userDetails.accessToken = response.authResponse.accessToken;
        this.fetchUserDetails();
      }  else {
        console.log('User login failed');
      }
    }, {scope: 'public_profile,email'});
  }

  private fetchUserDetails() {
    FB.api('/me', (response) => {
      this.userDetails.name = response.name;
      this.userDetails.id = response.id;
      console.log(this.userDetails);
    });
  }
}
