import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //view encapsulation for CSS styles, emulated is default one anyway
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  //property is bound to a DOM property in the template
  //binding by alias
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}