import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-list-page',
	templateUrl: './list-page.component.html',
	styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnDestroy {

	videos: { id: string, title: string, episode?: string, series?: string, shortDesc: string, poster: string }[] = []

	public noResults = false
	searchString = ""
	searchSubscribtion: Subscription

	constructor(private searchService: SearchService) { }

	ngOnInit(): void {
		this.searchSubscribtion = this.searchService.searchEvent.subscribe((files) => {
			if (files?.length > 0) {
				this.noResults = false
			} else {
				this.noResults = true
			}
			this.videos = files

			this.searchString = this.searchService.lastSearched
			console.log("fetched files with " + this.searchString);

		})

		history.state['searchString'] ? this.searchService.search(history.state['searchString']) : this.searchService.getRecent(20)
	}

	ngOnDestroy() {
		this.searchSubscribtion.unsubscribe()
	}
}
