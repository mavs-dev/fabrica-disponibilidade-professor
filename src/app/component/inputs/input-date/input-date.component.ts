import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pj-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  label: string;

  @Input()
  minDate: string;
  @Input()
  maxDate: string;

  date = new FormControl();
  // maxDate = moment(new Date()).format('YYYY-MM-DD');

  @Output()
  formControl = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.formControl.emit(this.date);
  }

}
