import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UnidadeAcademicaService } from 'src/app/services/unidade-academica.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { DisciplinaInteresseItem } from 'src/app/interfaces/disciplina-interesse-item';
import { UnidadeAcademica } from 'src/app/interfaces/unidade-academica';

@Component({
  selector: 'pj-disciplinas-interesse',
  templateUrl: './disciplinas-interesse.component.html',
  styleUrls: ['./disciplinas-interesse.component.css']
})
export class DisciplinasInteresseComponent implements OnInit {

  DisciplinasDeinteresseForm: FormGroup;

  unidadesAcademicas: UnidadeAcademica[];
  dropdownSettings = {};

  constructor(
    private formBuilder: FormBuilder,
    private unidadeAcademicaService: UnidadeAcademicaService,
    private disciplinaService: DisciplinaService
  ) { }

  ngOnInit() {
    this.carregarUnidadesAcademicas();
    this.DisciplinasDeinteresseForm = this.formBuilder.group({
      // MULTI-SELECTS
      unidadeAcademicaDisciplina1: [null],
      unidadeAcademicaDisciplina2: [null],
      unidadeAcademicaDisciplina3: [null],
      unidadeAcademicaDisciplina4: [null],
      unidadeAcademicaDisciplina5: [null],
      unidadeAcademicaDisciplina6: [null],
      unidadeAcademicaDisciplina7: [null],
      unidadeAcademicaDisciplina8: [null],
      unidadeAcademicaDisciplina9: [null],
      unidadeAcademicaDisciplina10: [null],
    });

    // OPTIONS DO MULTI-SELECT DE ACORDO COM A INTERFACE UNIDADE ACADÊMICA
    this.unidadesAcademicas = [
      { id: 1, nome: 'Sobradinho', sigla: null, dataHoraCadastro: null, dataHoraAlteracao: null, dataHoraExclusao: null },
      { id: 2, nome: 'Ceilândia', sigla: null, dataHoraCadastro: null, dataHoraAlteracao: null, dataHoraExclusao: null },
      { id: 3, nome: 'Taguatinga', sigla: null, dataHoraCadastro: null, dataHoraAlteracao: null, dataHoraExclusao: null },
      { id: 4, nome: 'Tag. Norte', sigla: null, dataHoraCadastro: null, dataHoraAlteracao: null, dataHoraExclusao: null },
      { id: 5, nome: 'Guará', sigla: null, dataHoraCadastro: null, dataHoraAlteracao: null, dataHoraExclusao: null }
    ];

    // PARÂMETROS DO COMPONENTE MULTI-SELECT
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

  // PRINTA O ITEM SELECIONADO NO MULTI-SELECT
  onItemSelect(item: any) {
    console.log(item);
  }

  // PRINTA TODOS OS ITENS AO PRESSIONAR SELECIONAR TODOS NO MULTI-SELECT
  onSelectAll(items: any) {
    console.log(items);
  }

  // CARREGA AS UNIDADES ACADÊMICAS
  carregarUnidadesAcademicas() {
    this.unidadeAcademicaService.getAll().subscribe(data => {
      if (data) {
        this.unidadesAcademicas = data;
      }
    });
  }

  // ADICIONA OS VALORES DOS INPUTS TEXT
  addFormControl(name: string, formControl: FormControl) {
    this.DisciplinasDeinteresseForm.addControl(name, formControl);
  }

  salvar() {
    // VER COMO FICARÁ A INTERFACE DE DISCIPLINAS.
  }

  // CRIA O OBJETO DE DISCIPLINAS DE INTERESSE
  criarObjetoDisciplinasInteresse() {

  }
}
