import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements AfterViewInit {

  video: {
    id: string;
    title: string;
    episode?: string;
    series?: string;
    shortDesc: string;
    poster: string;
  }

  paramId: string

  constructor(route: ActivatedRoute, private titleService: Title, private searchService: SearchService) {
    route.params.subscribe((params) => {
      this.paramId = params["id"];
    });
  }

  async ngAfterViewInit() {
    // @TODO Fetch
    this.video = await this.searchService.getById(this.paramId)

    this.titleService.setTitle(this.video && this.video?.title ? this.video.title : 'Streaming...');
  }

  goToPrevious() {

  }

  goToNext() {

  }
}
