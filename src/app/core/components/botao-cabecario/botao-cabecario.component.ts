import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-cabecario',
  templateUrl: './botao-cabecario.component.html',
  styleUrls: ['./botao-cabecario.component.scss']
})
export class BotaoCabecarioComponent {

  // @Input() url: string;
  // @Input() label: string;
  @Input() icon: any;
  @Input() event = false;
  @Output() return = new EventEmitter();

  // public faCaretLeft = faCaretLeft;

  constructor() { }

  eventClick() {
    this.return.emit();
  }

}
