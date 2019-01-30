import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedBannerComponent } from './news-feed-banner.component';

describe('NewsFeedBannerComponent', () => {
  let component: NewsFeedBannerComponent;
  let fixture: ComponentFixture<NewsFeedBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
