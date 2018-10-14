import { Component, OnInit } from '@angular/core';
import { NivelTitulacao } from '../../interfaces/nivel-titulacao';
declare var $;

@Component({
  selector: 'pj-dados-profissionais',
  templateUrl: './dados-profissionais.component.html',
  styleUrls: ['./dados-profissionais.component.css']
})
export class DadosProfissionaisComponent implements OnInit {

  niveisTitulacao: Array<NivelTitulacao>;

  constructor() { }

  ngOnInit() {
  }

}
