import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, firstValueFrom, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  @Output() searchEvent = new EventEmitter<{ title: string, shortDesc: string, poster: string }[]>()

  videos: { title: string, shortDesc: string, poster: string }[] = []
  premades: { title: string, shortDesc: string, poster: string }[] = [
    { title: "Naruto Shippuden: 500", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", poster: "assets/dev_assets/naruto-shippuden-500-cover.png" },
    { title: "The Dark Knight Rises has a very long title for some reason, and now it's even longer", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long. And you better believe I'm gonna cut it off if it gets too long.", poster: "assets/dev_assets/the-dark-knight-rises-cover.png" },
    { title: "Naruto Shippuden: 499", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long.", poster: "assets/dev_assets/naruto-shippuden-499-cover.png" },
    { title: "Naruto Shippuden: 498", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long.", poster: "assets/dev_assets/naruto-shippuden-498-cover.png" }
  ]
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.videos.push(this.premades[i % 4]);
    }
  }

  async search(input: string) {
    console.log("Searched for: " + input);

    // Do the fetch
    let result = this.videos.filter(val => val.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    // Emit the result
    this.searchEvent.emit(result)
  }

  async getRecent() {
    // Do the fetch

    // Emit the result
    this.searchEvent.emit(this.videos)
  }
}
