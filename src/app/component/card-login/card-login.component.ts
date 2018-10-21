import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'pj-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  @Output()
  mensagemErro = new EventEmitter();
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LoginService, private router: Router) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.loginForm = this.formBuilder.group({
      // TODO retirar [0-9]
      inputEmail: [null, [Validators.required, Validators.pattern(/^[a-z]+\.[a-z]+[0-9?]+?$/i)]],
      inputSenha: [null, [Validators.required]]
    });
  }

  login () {
    this.mensagemErro.emit('');
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
    this.service.login(usuario).subscribe(data => {
      if (data && !data.mensagemErro) {
        usuario.id = data.idUsuario;
        usuario.nome = data.nomeUsuario;
        usuario.senha = null;
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        sessionStorage.setItem('time', data.sessionTime);
        this.router.navigate(['/formulario']);
      } else if (data && data.mensagemErro) {
        this.mensagemErro.emit(data.mensagemErro);
        setTimeout(() => {
          this.mensagemErro.emit(null);
        }, 30000);
      }
    });
  }
}
