import { Player } from '../../data/player';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  public parentName: string; // = 'I am the father';
  public playerInParent: Player; // = new Player({name: 'Pepe'});
  @Input() public titleIn: string;

  constructor() {
    this.parentName = 'This is the parent name value';
    this.playerInParent = new Player({name: 'Pepe'});
  }

  public eventFromChildHandler(textFromChild: string): void {
    debugger;
    this.parentName = textFromChild;
  }

  public eventSelectHandler(playerIn: any): void {
    debugger;
    this.playerInParent = playerIn;
  }

}
