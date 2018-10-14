import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pj-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  mensagem: string;
  @Input()
  exibeBotaoFechar: boolean;
  @Input()
  classeCSS: string;
  @Input()
  requerAtencao: boolean;

  constructor() { }

  ngOnInit() {
  }

}
