import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pj-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input()
  placeText: string;
  @Input()
  name: string;
  @Input()
  label: string;
  @Input()
  row: number;
  @Input()
  maxlength: number;
  @Input()
  resizable: boolean;
  resizeValue: string;

  textArea = new FormControl();

  @Output()
  formControl = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resizeValue = !this.resizable ? 'none' : 'vertical';
    this.formControl.emit(this.textArea);
  }

}
