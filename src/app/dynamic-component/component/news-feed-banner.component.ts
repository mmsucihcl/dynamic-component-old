import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { NewsFeedDirective } from 'src/app/dynamic-component/directive/news-feed.directive';
import { NewsFeedItem } from 'src/app/dynamic-component/service/news-feed-item';
import { NewsFeed } from 'src/app/dynamic-component/service/news-feed.model';
import { NewsFeedService } from 'src/app/dynamic-component/service/news-feed.service';

@Component({
  selector: 'app-news-feed-banner',
  templateUrl: './news-feed-banner.component.html',
  styleUrls: ['./news-feed-banner.component.css']
})
export class NewsFeedBannerComponent implements OnInit, OnDestroy {

 newsfeeds: NewsFeedItem[];
  currentAdIndex = -1;
  @ViewChild(NewsFeedDirective) newsfeed: NewsFeedDirective;
  interval: any;

  constructor(private newsFeedService: NewsFeedService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.newsfeeds = this.newsFeedService.getAds();
    this.loadNewsFeedComponents();
    this.getNewsFeeds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadNewsFeedComponents() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.newsfeeds.length;
    const newsFeedItem = this.newsfeeds[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(newsFeedItem.component);

    const viewContainerRef = this.newsfeed.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<NewsFeed>componentRef.instance).data = newsFeedItem.data;
  }

  getNewsFeeds() {
    this.interval = setInterval(() => {
      this.loadNewsFeedComponents();
    }, 3000);
  }

}
