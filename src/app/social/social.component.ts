import { Component, OnInit } from '@angular/core';
import {SocialService} from '../services/social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  isLibraryLoaded = false;

  constructor(private socialService: SocialService) { }

  ngOnInit() {
    this.socialService.initLibrary()
      .subscribe((response) => {
        this.isLibraryLoaded = true;
      });
  }

  login() {
    this.socialService.login();
  }
}
