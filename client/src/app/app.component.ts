import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello Dojo";
  characters: any = [1,2,3];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log(data);
      this.characters = data;
    });
  }

}
