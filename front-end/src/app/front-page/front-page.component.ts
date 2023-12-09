import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    selector: 'app-front-page',
    templateUrl: './front-page.component.html',
    styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

    prevViewed: { id: string, title: string, episode?: string, series?: string, shortDesc: string, poster: string }[] = []

    constructor(private router: Router, private searchService: SearchService) { }

    ngOnInit() {
        this.searchService.searchEvent.subscribe((files) => {
            this.prevViewed = files
        })
        this.searchService.getRecent(4)
    }

    goToVideo(id: string) {
        this.router.navigate(['video-viewer', id])
    }
}