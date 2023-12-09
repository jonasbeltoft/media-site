import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
	selector: 'app-viewer',
	templateUrl: './viewer.component.html',
	styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

	@ViewChild('videoplayer') videoplayer: ElementRef;

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

	async ngOnInit() {
		// @TODO Fetch
		this.video = await this.searchService.getById(this.paramId)

		this.titleService.setTitle(this.video && this.video?.title ? this.video.title : 'Streaming...');

		if ('mediaSession' in navigator) this.createMobileSession()

	}

	createMobileSession() {
		navigator.mediaSession.metadata = new MediaMetadata({
			title: this.video.title,
			album: this.video.series ? this.video.series : undefined,
			artwork: [
				{ src: "assets/film-slate-partly-colored.png", sizes: "512x512", type: "image/png" },
				{ src: "assets/dev_assets/dev-poster.png", sizes: "1804x970", type: "image/png" },
			]
		})
		navigator.mediaSession.setActionHandler('play', this.videoplayer.nativeElement.play)
		navigator.mediaSession.setActionHandler('pause', this.videoplayer.nativeElement.pause)
		navigator.mediaSession.setActionHandler('nexttrack', this.goToNext)
		navigator.mediaSession.setActionHandler('previoustrack', this.goToPrevious)
	}

	goToPrevious() {

	}

	goToNext() {

	}
}
