import { Component, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { Botao } from '../../interfaces/botao';
declare var $;
@Component({
  selector: 'pj-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input()
  backdrop: boolean;
  @Input()
  keyboard: boolean;
  @Input()
  focus: boolean;
  @Input()
  show: boolean;

  @Input()
  titulo: string;
  @Input()
  mensagem: string;
  @Input()
  exibeBotaoFechar = true;
  @Input()
  botaoOK: Botao;
  @Input()
  botaoCancelar: Botao;

  constructor() { }

  ngOnInit() {
    console.log(this.show);
    $('#pjModal').modal({
      backdrop: this.backdrop,
      keyboard: this.keyboard,
      focus: this.focus,
      show: this.show
    });
  }

  ngOnDestroy() {
    $('#pjModal').modal('dispose');
  }

  @Output()
  openModal = function () {
    $('#pjModal').modal('show');
  };

  @Output()
  closeModal = function () {
    $('#pjModal').modal('hide');
  };
}
