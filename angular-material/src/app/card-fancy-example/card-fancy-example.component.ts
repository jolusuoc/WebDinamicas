import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-card-fancy-example',
  templateUrl: './card-fancy-example.component.html',
  styleUrls: ['./card-fancy-example.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardFancyExampleComponent implements OnInit {

  @Input() valueText = 'THIS IS AN INPUT';
  constructor() { }

  ngOnInit() {
  }

}
