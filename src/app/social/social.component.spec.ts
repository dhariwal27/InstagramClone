import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialComponent } from './social.component';
import {SocialService} from '../services/social.service';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;
  let service: SocialService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialComponent ],
      providers: [SocialService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(SocialService);
    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
