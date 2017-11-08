import { AvailablePlayers } from './../../data/players';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Player} from './../../data/player';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public childIn: string;
  @Output() eventOutput = new EventEmitter<any>();
  @Output() eventOutputSelectPlayer = new EventEmitter<any>();

  public players = AvailablePlayers;

  onClickEvent() {
    debugger;
    this.eventOutput.emit('un texto desde el hijo');
  }

  onSelectPlayer(player: Player) {
    debugger;
    this.eventOutputSelectPlayer.emit({player: Player});
  }

  constructor() { }

  ngOnInit() {
  }

}
