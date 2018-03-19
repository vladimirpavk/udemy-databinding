import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: {type:string, name:string, content:string}[] = [];

  added(event: {type:string, name:string, content:string}):void
  {
    this.serverElements.push(event);
    //console.log(this.serverElements);
  }
}
