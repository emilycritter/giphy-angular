import { Component } from '@angular/core';
import { GiphyFormComponent } from './giphy-form';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Giphy | Angular 2</h1>
    <giphy-form></giphy-form>`,
  directives: [GiphyFormComponent]
})
export class AppComponent {
}
