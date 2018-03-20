import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*serverElements: {type:string, name:string, content:string}[] = [];

  added(event: {type:string, name:string, content:string}):void
  {
    this.serverElements.push(event);
    //console.log(this.serverElements);
  }*/

  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];
  
  public tickTack(counter:number):void{
    if( this.isEven(counter) ){
      this.evenNumbers.push(counter);
      console.log(this.evenNumbers);
    }
    else{
      this.oddNumbers.push(counter);
      console.log(this.oddNumbers);
    }
  }

  public isEven(value: number):boolean{
    let division=value/2;
    if(Math.trunc(division)*2==value) return true;
    return false;
  }
  
}
