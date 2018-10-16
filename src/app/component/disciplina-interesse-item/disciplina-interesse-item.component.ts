import { Component, OnInit, Input } from '@angular/core';
import { DisciplinaInteresseItem } from '../../interfaces/disciplina-interesse-item';

@Component({
  selector: 'pj-disciplina-interesse-item',
  templateUrl: './disciplina-interesse-item.component.html',
  styleUrls: ['./disciplina-interesse-item.component.css']
})
export class DisciplinaInteresseItemComponent implements OnInit {

  @Input()
  disciplina: DisciplinaInteresseItem;

  constructor() { }

  ngOnInit() {
  }

}
