import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Semestre } from 'src/app/interfaces/semestre';

@Component({
  selector: 'pj-disponibilidades',
  templateUrl: './disponibilidades.component.html',
  styleUrls: ['./disponibilidades.component.css']
})
export class DisponibilidadesComponent implements OnInit {

  semestre: Semestre;
  disponibilidadeForm: FormGroup;
  unidadesAcademicas = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.semestre = {
      id: 0,
      semestreReferencia: 1,
      anoReferencia: 2019,
      dataHoraCadastro: null,
      dataHoraAlteracao: null,
      dataHoraExclusao: null
    };
    this.disponibilidadeForm = this.formBuilder.group({
      matutinoSegunda: [null],
      matutinoTerca: [null],
      matutinoQuarta: [null],
      matutinoQuinta: [null],
      matutinoSexta: [null],
      matutinoSabado: [null],
      noturnoSegunda: [null],
      noturnoTerca: [null],
      noturnoQuarta: [null],
      noturnoQuinta: [null],
      noturnoSexta: [null]
    });
    this.unidadesAcademicas = [
      { item_id: 1, item_text: 'Sobradinho' },
      { item_id: 2, item_text: 'Ceilândia' },
      { item_id: 3, item_text: 'Taguatinga' },
      { item_id: 4, item_text: 'Tag. Norte' },
      { item_id: 5, item_text: 'Guará' }
    ];

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

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  salvar() {
    console.log('Formulário', this.disponibilidadeForm.controls);
  }
}
