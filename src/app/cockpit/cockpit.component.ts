import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';

  @Output() onElementAdded: EventEmitter<{type:string, name:string, content: string}> = new EventEmitter<{type:string, name:string, content: string}>();

  @ViewChild('serverContentInput') newServerContent:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.onElementAdded.emit({
      type: 'server',
      name: serverNameInput.value,
      content: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.onElementAdded.emit({
      type: 'blueprint',
      name: serverNameInput.value,
      content: this.newServerContent.nativeElement.value
    });
  }

}
