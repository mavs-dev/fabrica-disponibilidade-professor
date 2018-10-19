import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pj-disponibilidades',
  templateUrl: './disponibilidades.component.html',
  styleUrls: ['./disponibilidades.component.css']
})
export class DisponibilidadesComponent implements OnInit {

  unidadesAcademicas = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() { }

  ngOnInit() {
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

}