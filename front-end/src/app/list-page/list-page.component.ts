import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  videos: { title: string, shortDesc: string, poster: string }[] = []

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchEvent.subscribe((files) => {
      this.videos = files
      console.log(this.videos);
    })

    history.state['searchString'] ? this.searchService.search(history.state['searchString']) : this.searchService.getRecent()
  }
}