import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nome: string;
  constructor() { }

  ngOnInit() {
    this.nome = JSON.parse(sessionStorage.getItem('usuario')).nome;
  }

}
