import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
	@Input()
	elem: any

	@Input()
	hasDescription: boolean

	constructor(private router: Router) { }

	goToVideo(id: string) {
		if (id) this.router.navigate(['video-viewer', id])
	}
}
