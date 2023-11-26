import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListPageComponent } from '../list-page/list-page.component';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements AfterViewInit {

  @ViewChild('topBar') top_bar: ElementRef;

  constructor(private router: Router, private searchService: SearchService, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // if (window.scrollY == 0) {
    //   //user is at the top of the page
    //   this.renderer.setStyle(this.top_bar.nativeElement, 'background-image', 'linear-gradient(#00000020, #00000010, #00000006, transparent)')
    // } else {
    //   this.renderer.setStyle(this.top_bar.nativeElement, 'background-image', 'linear-gradient(#00000020, #00000010, #00000006, transparent)')
    // }
  }

  search(val: any) {
    if (val?.value === "" || val?.value === undefined) return
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
    if (this.router.url.includes('/list')) {
      this.searchService.getRecent()
    } else {
      this.router.navigate(['/list'], { state: { searchString: null } })
    }
  }
}
