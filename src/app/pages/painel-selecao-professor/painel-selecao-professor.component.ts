import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pj-painel-selecao-professor',
  templateUrl: './painel-selecao-professor.component.html',
  styleUrls: ['./painel-selecao-professor.component.css']
})
export class PainelSelecaoProfessorComponent implements OnInit {
  public data: any;

  mensagem: string;

  pesquisaProfessorForm: FormGroup;

  dropdownSettings = {};


  constructor(private builder: FormBuilder) { }

  ngOnInit() {

    this.data = [{ 'name': 'Yves Guilherme', 'email': 'Taguatinga Norte', 'age': 'JAVA 3', 'city': 'SEG; TER; QUA' },
    { 'name': 'Yves Guilherme Lopo', 'email': 'Taguatinga Norte', 'age': 'JAVA 2', 'city': 'SEG' },
    { 'name': 'Marcos Vieira', 'email': 'Taguatinga Norte', 'age': 'JAVA 1', 'city': 'QUA' },
    { 'name': 'Alok', 'email': 'Ceilândia', 'age': 'ENGENHARIA DE SOFT. 2', 'city': 'QUI; SEX' },
    { 'name': 'Tinku', 'email': 'Guará', 'age': 'C#', 'city': 'SEG; TER; QUA; QUI; SEX' },
    { 'name': 'XYZ', 'email': 'Sobradinho', 'age': 'ALGORITMOS', 'city': 'SAB' },
    { 'name': 'asas', 'email': 'Sobradinho', 'age': 'ENGENHARIA DE SOFT. 3', 'city': 'TER; QUI' },
    { 'name': 'erer', 'email': 'Taguatinga', 'age': 'BANCO DE DADOS', 'city': 'SEGUNDA; QUAR; SEXT' },
    { 'name': 'jhjh', 'email': 'Taguatinga Norte', 'age': 'ENGENHARIA DE SOFT. 1', 'city': 'TER' }
    ];

    this.pesquisaProfessorForm = this.builder.group({});

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };
  }

  salvar() {

  }

}
