import { Injectable } from '@angular/core';
import { NewsFeedItem } from 'src/app/dynamic-component/service/news-feed-item';
import { JobFeedComponent } from 'src/app/loading-component/job-feed/job-feed.component';
import { ProfileFeedComponent } from 'src/app/loading-component/profile-feed/profile-feed.component';



@Injectable()
export class NewsFeedService {
  getAds() {
    return [
      new NewsFeedItem(ProfileFeedComponent, {name: 'Jim Chris', bio: '7+ exprience in UI Development. Look for job. Hire now'}),

      new NewsFeedItem(JobFeedComponent,   {headline: 'Openings in UI Developer',
                                        body: 'Apply today'}),

      new NewsFeedItem(ProfileFeedComponent, {name: 'Alex Sam', bio: 'Angular Freelancer'}),

      new NewsFeedItem(JobFeedComponent,   {headline: 'Hiring for several UI positions',
                                        body: 'Submit your resume today!'}),

    ];
  }
}
