import { GIPHYREQUESTS } from './mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class GiphyService {
  getGifs(){
    return GIPHYREQUESTS;
  }
}
