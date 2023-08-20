import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListPageComponent } from '../list-page/list-page.component';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router, private searchService: SearchService) { }

  search(val: any) {
    if (this.router.url.includes('/list')) {
      this.searchService.search(val.value)
    } else {
      this.router.navigate(['/list'], { state: { searchString: val.value } })
    }
    val.value = ""
  }

  goToHome() {
    this.router.navigate([''])
  }

  goToList() {
    this.router.navigate(['/list'])
  }
}
