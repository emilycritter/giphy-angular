import { Component } from '@angular/core';
import { GiphyRequest } from './giphy-request';
import { GIPHYREQUESTS } from './mocks';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'giphy-form',
  templateUrl: 'app/giphy-form.html'
})
export class GiphyFormComponent {
  giphyRequests: GiphyRequest[];

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.giphyRequests = this.giphyService.getGifs();
  }
};
