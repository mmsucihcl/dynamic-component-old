import { Component, Input } from '@angular/core';
import { NewsFeed } from 'src/app/dynamic-component/service/news-feed.model';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css']
})
export class ProfileFeedComponent implements NewsFeed  {
  @Input() data: any;
  constructor() { }
}
