import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nuevo-component',
  templateUrl: './nuevo-component.component.html',
  styleUrls: ['./nuevo-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NuevoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
