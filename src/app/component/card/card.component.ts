import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../classes/dto/image';

@Component({
  selector: 'pj-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  imagem: Image;

  constructor() { }

  ngOnInit() {
  }

}
