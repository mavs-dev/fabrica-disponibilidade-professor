import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Semestre } from 'src/app/interfaces/semestre';
import { UnidadeAcademicaService } from 'src/app/services/unidade-academica.service';
import { SemestreService } from 'src/app/services/semestre.service';
import { DisponibilidadeService } from 'src/app/services/disponibilidade.service';
import { UnidadeAcademica } from 'src/app/interfaces/unidade-academica';
import { Disponibilidade } from 'src/app/interfaces/disponibilidade';

@Component({
  selector: 'pj-disponibilidades',
  templateUrl: './disponibilidades.component.html',
  styleUrls: ['./disponibilidades.component.css']
})
export class DisponibilidadesComponent implements OnInit {

  semestre: Semestre;
  disponibilidadeForm: FormGroup;
  unidadesAcademicas: UnidadeAcademica[];
  disponibilidadeInformada: Disponibilidade[] = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder,
    private unidadeAcademicaService: UnidadeAcademicaService,
    private semestreService: SemestreService,
    private disponibilidadeService: DisponibilidadeService
  ) { }

  ngOnInit() {
    this.carregarUnidadesAcademicas();
    this.carregarSemestre();
    this.disponibilidadeForm = this.formBuilder.group({
      matutinoSegunda: [null],
      matutinoTerca: [null],
      matutinoQuarta: [null],
      matutinoQuinta: [null],
      matutinoSexta: [null],
      matutinoSabado: [null],
      noturnoSegunda: [null],
      noturnoTerca: [null],
      noturnoQuarta: [null],
      noturnoQuinta: [null],
      noturnoSexta: [null]
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
  }

  onItemSelect(item: any) {
  }
  onSelectAll(items: any) {
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

  salvar() {
    if (this.disponibilidadeInformada.length === 0) {
      this.montarDisponibilidadeInformada();
    } else {
      this.atualizarDisponibilidadeInformada();
    }
  }

  montarDisponibilidadeInformada() {
    this.montarDiaPorTurno('matutino', 'Segunda');
    this.montarDiaPorTurno('matutino', 'Terca');
    this.montarDiaPorTurno('matutino', 'Quarta');
    this.montarDiaPorTurno('matutino', 'Quinta');
    this.montarDiaPorTurno('matutino', 'Sexta');
    this.montarDiaPorTurno('matutino', 'Sabado');

    this.montarDiaPorTurno('noturno', 'Segunda');
    this.montarDiaPorTurno('noturno', 'Terca');
    this.montarDiaPorTurno('noturno', 'Quarta');
    this.montarDiaPorTurno('noturno', 'Quinta');
    this.montarDiaPorTurno('noturno', 'Sexta');

    this.disponibilidadeInformada.forEach((value) => {
      this.disponibilidadeService.save(value).subscribe(data => {
        console.log(data);
      });
    });
  }

  montarDiaPorTurno(turno: string, dia: string) {
    if (this.disponibilidadeForm.get(turno + dia).value) {
      this.disponibilidadeInformada.push(
        this.criarObjetoDisponibilidade(this.disponibilidadeForm.get(turno + dia).value, turno.toUpperCase(), dia.toUpperCase())
      );
    }
  }

  atualizarDisponibilidadeInformada() {

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
