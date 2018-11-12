import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DadosProfissionaisService } from 'src/app/services/dados-profissionais.service';
import { CurriculoLattesService } from 'src/app/services/curriculo-lattes.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { CurriculoLattes } from 'src/app/interfaces/curriculo-lattes';
import { DadosProfissionais } from 'src/app/interfaces/dados-profissionais';
import { Router } from '@angular/router';
import moment from 'moment/src/moment';
var moment = require('moment-timezone');

declare var $;

@Component({
  selector: 'pj-dados-profissionais',
  templateUrl: './dados-profissionais.component.html',
  styleUrls: ['./dados-profissionais.component.css']
})
export class DadosProfissionaisComponent implements OnInit, AfterViewInit {

  mensagem: string;
  dadosProfissionaisForm: FormGroup;
  usuario: Usuario;

  maxDate = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD');

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private dadosProfissionaisService: DadosProfissionaisService,
    private curriculoLattesService: CurriculoLattesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dadosProfissionaisForm = this.formBuilder.group({
      titulacaoEmAndamento: [null, []],
      nivelGraduacao: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
    this.verificarCadastroUsuario();
  }

  addFormControl(name: string, formControl: FormControl) {
    this.dadosProfissionaisForm.addControl(name, formControl);
  }

  verificarCadastroUsuario() {
    this.usuarioService.getOne(JSON.parse(sessionStorage.getItem('usuario')).id).subscribe(data => {
      if (data) {
        this.usuario = data;
        this.preencherFormulario();
      }
    });
  }

  preencherFormulario() {
    if (this.usuario.dadosProfissionais) {
      this.dadosProfissionaisForm.get('graduacao').setValue(this.usuario.dadosProfissionais.graduacao);
      this.dadosProfissionaisForm.get('dataConclusao').setValue(this.usuario.dadosProfissionais.dataConclusao);
      this.dadosProfissionaisForm.get('nivelGraduacao').setValue(this.usuario.dadosProfissionais.maiorTitulacaoObtida);
      this.dadosProfissionaisForm.get('titulacaoEmAndamento').setValue(this.usuario.dadosProfissionais.titulacaoEmAndamento);
      // tslint:disable-next-line:max-line-length
      this.dadosProfissionaisForm.get('descricaoTitulacaoEmAndamento').setValue(this.usuario.dadosProfissionais.descricaoTitulacaoEmAndamento);
      // tslint:disable-next-line:max-line-length
      this.dadosProfissionaisForm.get('principalAtuacaoProfissional').setValue(this.usuario.dadosProfissionais.principalAtuacaoProfissional);
      this.dadosProfissionaisForm.get('tempoExpProfissional').setValue(this.usuario.dadosProfissionais.tempoExpProfissional);
      this.dadosProfissionaisForm.get('tempoExpMagisterioSuperior').setValue(this.usuario.dadosProfissionais.tempoExpMagisterioSuperior);
      this.dadosProfissionaisForm.get('tempoExpDocenciaEdBasica').setValue(this.usuario.dadosProfissionais.tempoExpDocenciaEdBasica);
      if (this.usuario.dadosProfissionais.curriculoLattes) {
        this.dadosProfissionaisForm.get('curriculoLattesDataAtt').setValue(this.usuario.dadosProfissionais.curriculoLattes.dataAtualizacao);
        this.dadosProfissionaisForm.get('curriculoLattesUrl').setValue(this.usuario.dadosProfissionais.curriculoLattes.url);
        this.dadosProfissionaisForm.get('publicacoes').setValue(this.usuario.dadosProfissionais.curriculoLattes.publicacoes);
      }
    }
  }

  curriculoLattesModificado(curriculoLattes: any) {
    if (curriculoLattes.dataAtualizacao !== this.usuario.dadosProfissionais.curriculoLattes.dataAtualizacao) {
      return true;
    } else if (curriculoLattes.url !== this.usuario.dadosProfissionais.curriculoLattes.url) {
      return true;
    } else if (curriculoLattes.publicacoes !== this.usuario.dadosProfissionais.curriculoLattes.publicacoes) {
      return true;
    } else {
      return false;
    }
  }

  salvar() {
    // tslint:disable-next-line:prefer-const
    let dadosProfissionais: DadosProfissionais = {
      id: null,
      graduacao: this.dadosProfissionaisForm.get('graduacao').value,
      dataConclusao: this.dadosProfissionaisForm.get('dataConclusao').value,
      maiorTitulacaoObtida: this.dadosProfissionaisForm.get('nivelGraduacao').value,
      titulacaoEmAndamento: this.dadosProfissionaisForm.get('titulacaoEmAndamento').value,
      descricaoTitulacaoEmAndamento: this.dadosProfissionaisForm.get('descricaoTitulacaoEmAndamento').value,
      principalAtuacaoProfissional: this.dadosProfissionaisForm.get('principalAtuacaoProfissional').value,
      tempoExpProfissional: this.dadosProfissionaisForm.get('tempoExpProfissional').value,
      tempoExpMagisterioSuperior: this.dadosProfissionaisForm.get('tempoExpMagisterioSuperior').value,
      tempoExpDocenciaEdBasica: this.dadosProfissionaisForm.get('tempoExpDocenciaEdBasica').value,
      curriculoLattes: null,
      professor: this.usuario,
      dataHoraCadastro: null,
      dataHoraAlteracao: null,
      dataHoraExclusao: null
    };
    // tslint:disable-next-line:prefer-const
    let curriculoLattes: CurriculoLattes = {
      id: null,
      dataAtualizacao: this.dadosProfissionaisForm.get('curriculoLattesDataAtt').value,
      url: this.dadosProfissionaisForm.get('curriculoLattesUrl').value,
      publicacoes: this.dadosProfissionaisForm.get('publicacoes').value,
      dadosProfissionais: dadosProfissionais,
      dataHoraCadastro: null,
      dataHoraAlteracao: null,
      dataHoraExclusao: null
    };
    if (this.usuario.dadosProfissionais) {
      curriculoLattes.dadosProfissionais.id = this.usuario.dadosProfissionais.id;
      this.dadosProfissionaisService.update(this.usuario.dadosProfissionais.id, dadosProfissionais).subscribe(() => {
        $('html, body').scrollTop(0);
        this.mensagem = 'Dados profissionais alterados com sucesso!';
        setTimeout(() => {
          this.mensagem = null;
        }, 5000);
      });
      if (this.usuario.dadosProfissionais.curriculoLattes && this.curriculoLattesModificado(curriculoLattes)) {
        this.curriculoLattesService.update(this.usuario.dadosProfissionais.curriculoLattes.id, curriculoLattes).subscribe(dataC => {
          $('html, body').scrollTop(0);
          this.mensagem = 'Dados profissionais alterados com sucesso!';
          setTimeout(() => {
            this.mensagem = null;
          }, 5000);
        });
      } else if (!this.usuario.dadosProfissionais.curriculoLattes) {
        this.curriculoLattesService.save(curriculoLattes).subscribe(dataT => {
          if (dataT) {
            $('html, body').scrollTop(0);
            this.mensagem = 'Dados profissionais salvos com sucesso!';
            setTimeout(() => {
              this.mensagem = null;
            }, 5000);
          }
        });
      }
    } else {
      this.dadosProfissionaisService.save(dadosProfissionais).subscribe(data => {
        if (data && data.id) {
          curriculoLattes.dadosProfissionais.id = data.id;
          this.curriculoLattesService.save(curriculoLattes).subscribe(dataT => {
            if (dataT) {
            $('html, body').scrollTop(0);
              this.mensagem = 'Dados profissionais salvos com sucesso!';
              setTimeout(() => {
                this.mensagem = null;
                this.router.navigate(['/formulario/disponibilidades']);
              }, 5000);
            }
          });
        }
      });
    }
  }

}
