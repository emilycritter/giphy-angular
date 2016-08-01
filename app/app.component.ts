import { Component } from '@angular/core';
import { GiphyFormComponent } from './giphy-form';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'my-app',
  template: `<h1>Giphy | Angular 2</h1>
    <giphy-form></giphy-form>`,
  directives: [GiphyFormComponent],
  providers: [GiphyService]
})
export class AppComponent {
}
