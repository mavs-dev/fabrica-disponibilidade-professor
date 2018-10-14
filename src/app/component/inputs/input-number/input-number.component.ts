import { Component, OnInit, Input } from '@angular/core';
declare var $;

@Component({
  selector: 'pj-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  icone: string;
  @Input()
  placeText: string;
  @Input()
  inputName: string;
  @Input()
  observacao: boolean;

  constructor() { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

}
