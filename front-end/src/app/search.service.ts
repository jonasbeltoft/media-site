import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, firstValueFrom, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  @Output() searchEvent = new EventEmitter<{ id: string, title: string, episode?: string, series?: string, shortDesc: string, poster: string }[]>()

  videos: { id: string, title: string, episode?: string, series?: string, shortDesc: string, poster: string }[] = []
  premades: { id: string, title: string, episode?: string, series?: string, shortDesc: string, poster: string }[] = [
    { id: "1", title: "It's a wonderful life", episode: "500", series: "Naruto Shippuden", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", poster: "assets/dev_assets/naruto-shippuden-500-cover.png" },
    { id: "2", title: "The Dark Knight Rises", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long. And you better believe I'm gonna cut it off if it gets too long.", poster: "assets/dev_assets/the-dark-knight-rises-cover.png" },
    { id: "3", title: "The wedding", episode: "499", series: "Naruto Shippuden", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long.", poster: "assets/dev_assets/naruto-shippuden-499-cover.png" },
    { id: "4", title: "Trouble in paradise", episode: "498", series: "Naruto Shippuden", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long.", poster: "assets/dev_assets/naruto-shippuden-498-cover.png" }
  ]
  constructor() {
    for (let i = 0; i < 40; i++) {
      let vid = structuredClone(this.premades[i % 4])
      vid.id = i.toString()
      this.videos.push(vid);
    }
  }

  async search(input: string) {
    console.log("Searched for: " + input);

    // Do the fetch
    let result = this.videos.filter(val => val.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    // Emit the result
    this.searchEvent.emit(result)
  }

  async getRecent(count: number) {
    // Do the fetch
    let result = this.videos.slice(0, count)
    // Emit the result
    console.log(result);

    this.searchEvent.emit(result)
  }

  async getById(id: string) {
    // Do the fetch
    let result = this.videos.find(vid => vid.id === id)
    return result
  }
}
