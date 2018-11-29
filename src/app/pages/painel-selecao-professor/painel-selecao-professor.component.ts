import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UnidadeAcademicaService } from 'src/app/services/unidade-academica.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'pj-painel-selecao-professor',
  templateUrl: './painel-selecao-professor.component.html',
  styleUrls: ['./painel-selecao-professor.component.css']
})
export class PainelSelecaoProfessorComponent implements OnInit {
  mensagem: string;

  pesquisaProfessorForm: FormGroup;

  dropdownUnidadesSettings = {};
  dropdownDiasSettings = {};
  dropdownTurnosSettings = {};

  professores = [];
  unidadesAcademicas = [];
  diasDaSemana = [
    { dia: 'SEGUNDA' },
    { dia: 'TERÇA' },
    { dia: 'QUARTA' },
    { dia: 'QUINTA' },
    { dia: 'SEXTA' },
    { dia: 'SÁBADO' }
  ];
  turnos = [
    { turno: 'MATUTINO' },
    { turno: 'NOTURNO' },
  ];

  // tslint:disable-next-line:no-inferrable-types
  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor(private builder: FormBuilder,
    private unidadeAcademicaService: UnidadeAcademicaService,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUnidadesAcademicas();
    this.carregarProfessores();

    this.pesquisaProfessorForm = this.builder.group({});

    this.dropdownUnidadesSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    this.dropdownDiasSettings = {
      singleSelection: false,
      idField: 'dia',
      textField: 'dia',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    this.dropdownTurnosSettings = {
      singleSelection: false,
      idField: 'turno',
      textField: 'turno',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  salvar() {

  }

  carregarUnidadesAcademicas() {
    this.unidadeAcademicaService.getAll().subscribe(data => {
      if (data) {
        this.unidadesAcademicas = data;
      }
    });
  }

  carregarProfessores() {
    this.usuarioService.getAll().subscribe(data => {
      if (data) {
        this.professores = data;
      }
    });
  }


}
