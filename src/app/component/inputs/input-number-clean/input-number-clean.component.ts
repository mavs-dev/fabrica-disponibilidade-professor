import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pj-input-number-clean',
  templateUrl: './input-number-clean.component.html',
  styleUrls: ['./input-number-clean.component.css']
})
export class InputNumberCleanComponent implements OnInit {

  @Input()
  placeText: string;
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
