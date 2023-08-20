import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {

  videoId: string
  videoName: string
  seriesName: string

  constructor(route: ActivatedRoute, private titleService: Title) {
    route.params.subscribe((params) => {
      this.videoId = params["id"];
    });

    // @TODO Fetch
    this.videoName = "Video name"
    this.seriesName = "Series name"

    this.titleService.setTitle(this.videoName ? 'Video: ' + this.videoName : 'Stream');
  }
}
