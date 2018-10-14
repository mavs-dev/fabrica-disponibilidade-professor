import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pj-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input()
  icone: string;
  @Input()
  placeText: string;

  constructor() { }

  ngOnInit() {
  }

}
