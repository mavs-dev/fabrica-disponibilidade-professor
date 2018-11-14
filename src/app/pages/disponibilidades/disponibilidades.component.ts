import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Semestre } from 'src/app/interfaces/semestre';
import { UnidadeAcademicaService } from 'src/app/services/unidade-academica.service';
import { SemestreService } from 'src/app/services/semestre.service';
import { DisponibilidadeService } from 'src/app/services/disponibilidade.service';
import { UnidadeAcademica } from 'src/app/interfaces/unidade-academica';
import { Disponibilidade } from 'src/app/interfaces/disponibilidade';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'pj-disponibilidades',
  templateUrl: './disponibilidades.component.html',
  styleUrls: ['./disponibilidades.component.css']
})
export class DisponibilidadesComponent implements OnInit {

  mensagem: string;
  semestre: Semestre;
  disponibilidadeForm: FormGroup;
  usuario: Usuario;
  unidadesAcademicas: UnidadeAcademica[];
  unidadeSelecionadas = [];
  disponibilidadeInformada: Disponibilidade[] = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder,
    private unidadeAcademicaService: UnidadeAcademicaService,
    private semestreService: SemestreService,
    private disponibilidadeService: DisponibilidadeService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarUnidadesAcademicas();
    this.carregarSemestre();
    this.disponibilidadeForm = this.formBuilder.group({
      matutinoSEGUNDA: [null],
      matutinoTERCA: [null],
      matutinoQUARTA: [null],
      matutinoQUINTA: [null],
      matutinoSEXTA: [null],
      matutinoSABADO: [null],
      noturnoSEGUNDA: [null],
      noturnoTERCA: [null],
      noturnoQUARTA: [null],
      noturnoQUINTA: [null],
      noturnoSEXTA: [null]
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };
    this.verificarCadastroUsuario();
  }

  carregarUnidadesAcademicas() {
    this.unidadeAcademicaService.getAll().subscribe(data => {
      if (data) {
        this.unidadesAcademicas = data;
      }
    });
  }

  carregarSemestre() {
    this.semestreService.getAll().subscribe(data => { if (data) { this.semestre = data.pop(); } });
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
    this.usuario.disponibilidades.forEach((value) => {
      const lista = new Array<any>();
      value.unidadesAcademicas.forEach(unidade => {
        lista.push({
          id: unidade['id'],
          nome: unidade['nome']
        });
      });
      this.unidadeSelecionadas[`${value.turno.toLowerCase()}${value.diaDaSemana.toUpperCase()}`] = lista;
      this.disponibilidadeForm.get(`${value.turno.toLowerCase()}${value.diaDaSemana.toUpperCase()}`).setValue(lista);
    });
  }

  salvar() {
    if (this.usuario.disponibilidades.length <= 0) {
      this.montarDisponibilidadeInformada();
      this.disponibilidadeInformada.forEach((value) => {
        this.disponibilidadeService.save(value).subscribe(data => {
          if (data && this.usuario.disciplinasDeInteresse.length <= 0) {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            this.mensagem = 'Disponibilidade cadastrada com sucesso!';
            setTimeout(() => {
              this.mensagem = null;
              this.router.navigate(['/formulario/disciplinas-interesse']);
            }, 5000);
          }
        });
      });
    } else {
      this.montarDisponibilidadeInformada();
      this.atualizarDisponibilidadeInformada();
    }
  }

  montarDisponibilidadeInformada() {
    this.montarDiaPorTurno('matutino', 'SEGUNDA');
    this.montarDiaPorTurno('matutino', 'TERCA');
    this.montarDiaPorTurno('matutino', 'QUARTA');
    this.montarDiaPorTurno('matutino', 'QUINTA');
    this.montarDiaPorTurno('matutino', 'SEXTA');
    this.montarDiaPorTurno('matutino', 'SABADO');

    this.montarDiaPorTurno('noturno', 'SEGUNDA');
    this.montarDiaPorTurno('noturno', 'TERCA');
    this.montarDiaPorTurno('noturno', 'QUARTA');
    this.montarDiaPorTurno('noturno', 'QUINTA');
    this.montarDiaPorTurno('noturno', 'SEXTA');
  }

  montarDiaPorTurno(turno: string, dia: string) {
    if (this.disponibilidadeForm.get(turno + dia).value) {
      this.disponibilidadeInformada.push(
        this.criarObjetoDisponibilidade(this.disponibilidadeForm.get(turno + dia).value, turno.toUpperCase(), dia.toUpperCase())
      );
    }
  }

  atualizarDisponibilidadeInformada() {
    this.usuarioService.getOne(this.usuario.id).subscribe(data => {
      if (data) {
        this.usuario = data;
      }
    });
    this.usuario.disponibilidades.forEach(value => {
      value.dataHoraExclusao = new Date();
      this.disponibilidadeService.delete(value.id).subscribe(data => {
        console.log(data);
      });
    });
    this.disponibilidadeInformada.forEach((value) => {
      this.disponibilidadeService.save(value).subscribe(data => {
        if (data) {
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          this.mensagem = 'Disponibilidade alterada com sucesso!';
          setTimeout(() => {
            this.mensagem = null;
          }, 5000);
        }
      });
    });
  }

  criarObjetoDisponibilidade(unidadesSelecionadas: Array<never>, turno: string, diaDaSemana: string): Disponibilidade {
    // tslint:disable-next-line:prefer-const
    let disponibilidade: Disponibilidade = {
      id: null,
      unidadesAcademicas: [],
      turno: turno,
      diaDaSemana: diaDaSemana,
      semestre: this.semestre,
      professor: JSON.parse(sessionStorage.getItem('usuario')),
      dataHoraCadastro: null,
      dataHoraAlteracao: null,
      dataHoraExclusao: null
    };
    unidadesSelecionadas.forEach((value) => {
      disponibilidade.unidadesAcademicas.push({
        id: value['id'],
        nome: null,
        sigla: null,
        dataHoraCadastro: null,
        dataHoraAlteracao: null,
        dataHoraExclusao: null
      });
    });
    return disponibilidade;
  }
}
