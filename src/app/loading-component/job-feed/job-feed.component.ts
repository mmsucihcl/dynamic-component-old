import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-feed',
  templateUrl: './job-feed.component.html',
  styleUrls: ['./job-feed.component.css']
})
export class JobFeedComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
