import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  name: string;
  @Input()
  label: string;
  @Input()
  mensagemAjuda: string;
  @Input()
  minNumber: number;
  @Input()
  maxNumber: number;

  number = new FormControl();

  @Output()
  formControl = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.formControl.emit(this.number);
  }

}
