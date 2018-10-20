import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/interfaces/usuario';

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
    console.log('Objeto do form: ', this.loginForm);
    const usuario = {
      id: null,
      nome: null,
      email: this.loginForm.get('inputEmail').value + '@projecao.br',
      senha: this.loginForm.get('inputSenha').value,
      dataHoraCadastro: null,
      dataHoraAlteracao: null,
      dataHoraExclusao: null,
      perfil: null,
      dadosProfissionais: null,
    };
    console.log('Objeto do usuario: ', usuario);
    this.service.login(usuario).subscribe(data => function() {
      if (data) {
        console.log('login efetuado');
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        sessionStorage.setItem('time', JSON.stringify(data));
      }
    });
  }
}
