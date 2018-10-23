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
  selectedItems = [];
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

    // this.unidadesAcademicas = [
    //   { item_id: 1, item_text: 'Sobradinho' },
    //   { item_id: 2, item_text: 'Ceilândia' },
    //   { item_id: 3, item_text: 'Taguatinga' },
    //   { item_id: 4, item_text: 'Tag. Norte' },
    //   { item_id: 5, item_text: 'Guará' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };
  }

  carregarUnidadesAcademicas() {
    this.unidadeAcademicaService.getAll().subscribe(data => {
      if (data) {
        this.unidadesAcademicas = data;
      }
    });
  }

  addFormControl(name: string, formControl: FormControl) {
    this.DisciplinasDeinteresseForm.addControl(name, formControl);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  salvar() {
    // VER COMO FICARÁ A INTERFACE DE DISCIPLINAS.
  }
}
