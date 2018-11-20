import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pj-painel-selecao-professor',
  templateUrl: './painel-selecao-professor.component.html',
  styleUrls: ['./painel-selecao-professor.component.css']
})
export class PainelSelecaoProfessorComponent implements OnInit {

  mensagem: string;

  pesquisaProfessorForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.pesquisaProfessorForm = this.builder.group({});
  }

  salvar() {

  }

}
