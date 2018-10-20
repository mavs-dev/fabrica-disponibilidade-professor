import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input()
  name: string;
  @Input()
  label: string;

  text = new FormControl();

  @Output()
  formControl = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.formControl.emit(this.text);
  }

}
