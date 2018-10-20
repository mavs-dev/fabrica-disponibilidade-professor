import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'pj-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  @Output()
  mensagemErro: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LoginService) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.loginForm = this.formBuilder.group({
      inputEmail: [null, [Validators.required, Validators.pattern(/^[a-z]+\.[a-z]+?$/i)]],
      inputSenha: [null, [Validators.required]]
    });
  }

  login () {
    console.log('Formulário válido: ', this.loginForm.valid);
  }
}
