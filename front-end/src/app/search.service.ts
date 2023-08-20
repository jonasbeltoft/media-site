import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, firstValueFrom, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  @Output() searchEvent = new EventEmitter<string[]>()

  myFiles: string[] = []

  constructor() { }

  async search(input: string) {
    console.log("Searched for: " + input);

    // Do the fetch
    this.myFiles.push("movie" + Math.floor(Math.random() * 100));

    // Emit the result
    this.searchEvent.emit(this.myFiles)
  }
}
