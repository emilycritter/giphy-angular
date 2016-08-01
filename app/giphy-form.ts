import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'giphy-form',
  template: `
  <br>
  <div class="input-group input-group-lg">
    <span class="input-group-addon glyphicon glyphicon-gift" id="basic-addon1"></span>
    <input
      type="text"
      class="form-control"
      placeholder="What would you like to see?"
      aria-describedby="basic-addon1"
      name="search" #searchTerm (keyup)="performSearch(searchTerm)"
      >
  </div>

  <br>
  <div class="container-flex">
    <div *ngFor="let g of gifs">
      <a href="{{g.url}}" class="thumbnail">
        <img src="{{g.images.fixed_height.url}}">
      </a>
    </div>
  </div>`,
  styleUrls: ['app/giphy.css']
})
export class GiphyFormComponent {
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  gifs = [];

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.link + searchTerm.value;
    this.http.request(apiLink)
     .subscribe((res: Response) => {
       this.gifs = res.json().data;
       console.log(this.gifs);
     });
   }
};
