import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //custome event binding
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //aliast for custom event binding
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
  this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
  this.blueprintCreated.emit({serverName: serverNameInput.value, serverContent: this.newServerContent});
  }

}