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

  constructor(route: ActivatedRoute, private titleService: Title) {
    route.params.subscribe((params) => {
      this.videoId = params["id"];
    });
    this.titleService.setTitle('Video: ');
  }
}
