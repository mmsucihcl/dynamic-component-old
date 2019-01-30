import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JobFeedComponent } from './loading-component/job-feed/job-feed.component';
import { ProfileFeedComponent } from './loading-component/profile-feed/profile-feed.component';
import { NewsFeedBannerComponent } from './dynamic-component/component/news-feed-banner.component';
import { NewsFeedService } from 'src/app/dynamic-component/service/news-feed.service';
import { NewsFeedDirective } from 'src/app/dynamic-component/directive/news-feed.directive';


@NgModule({
  declarations: [
    JobFeedComponent,
    ProfileFeedComponent,
    NewsFeedBannerComponent,
    NewsFeedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsFeedService],
  entryComponents: [ JobFeedComponent, ProfileFeedComponent ],
  bootstrap: [NewsFeedBannerComponent]
})
export class AppModule { }
