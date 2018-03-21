import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private ref:number=0
  private tickCount: number=0;
  @Output() tick: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartButtonClicked(){
    if(this.ref===0)
    {
      this.ref=window.setInterval(
        ()=>{
          this.tick.emit(this.tickCount++);
      }, 1000);
    }
  }

  onStopButtonClicked(){
    clearInterval(this.ref);
    this.ref=0;
  }

}
