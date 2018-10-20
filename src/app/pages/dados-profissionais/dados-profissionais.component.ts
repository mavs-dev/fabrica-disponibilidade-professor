import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $;

@Component({
  selector: 'pj-dados-profissionais',
  templateUrl: './dados-profissionais.component.html',
  styleUrls: ['./dados-profissionais.component.css']
})
export class DadosProfissionaisComponent implements OnInit, AfterViewInit {

  dadosProfissionaisForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dadosProfissionaisForm = this.formBuilder.group({
      titulacaoEmAndamento: [null, []],
      nivelGraduacao: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  addFormControl(name: string, formControl: FormControl) {
    this.dadosProfissionaisForm.addControl(name, formControl);
  }

  salvar() {
    const curriculoLattes = {
      id: null,
      dataAtualizacao: this.dadosProfissionaisForm.get('curriculoLattesDataAtt').value,
      url: this.dadosProfissionaisForm.get('curriculoLattesUrl').value,
      publicacoes: this.dadosProfissionaisForm.get('publicacoes').value
    };

    const dadosProfissionais = {
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
      curriculoLattes: null
    };

    console.log('Curriculo lattes >>>>>>>>>>', curriculoLattes);
    console.log('DadosProfissionais >>>>>>>>>>', dadosProfissionais);
    console.log('Usuario da sessao', JSON.parse(sessionStorage.getItem('usuario')));
  }

}
