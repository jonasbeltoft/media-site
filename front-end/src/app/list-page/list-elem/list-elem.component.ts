import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-elem',
  templateUrl: './list-elem.component.html',
  styleUrls: ['./list-elem.component.css']
})
export class ListElemComponent {

  @Input()
  elem: any

  constructor(private router: Router) { }

  goToVideo(id: string) {
    if (id) this.router.navigate(['video-viewer', id])
  }
}
