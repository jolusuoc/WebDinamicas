import { AvailablePlayers } from './../data/players';
import { Component, OnInit } from '@angular/core';
import {Player} from './../data/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>HOLA MUNDO</h1>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public titleFromAppComponent = 'This is an App value';

  public OnInit () {
  }
}
