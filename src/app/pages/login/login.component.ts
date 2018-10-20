import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string;

  constructor() {
  }

  ngOnInit() {
  }

  setMensagem(dados: string) {
    this.mensagem =  dados;
  }
}
