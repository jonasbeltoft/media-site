import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-elem',
  templateUrl: './list-elem.component.html',
  styleUrls: ['./list-elem.component.css']
})
export class ListElemComponent {

  @Input()
  searchElem: any

}
