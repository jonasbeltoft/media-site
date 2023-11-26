import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {

  prevViewed: { title: string, shortDesc: string, poster: string }[] = [
    { title: "Naruto Shippuden: 500", shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", poster: "assets/dev_assets/naruto-shippuden-500-cover.png" },
    { title: "The Dark Knight Rises", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long. And you better believe I'm gonna cut it off if it gets too long.", poster: "assets/dev_assets/the-dark-knight-rises-cover.png" },
    { title: "Naruto Shippuden: 499", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long.", poster: "assets/dev_assets/naruto-shippuden-499-cover.png" },
    { title: "Naruto Shippuden: 498", shortDesc: "A short description of this movie or episode. It might be a little lenghty, but not too long.", poster: "assets/dev_assets/naruto-shippuden-498-cover.png" }
  ]
}
