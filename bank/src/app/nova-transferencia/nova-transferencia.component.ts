import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number;
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log("Nova transferência solicitada");
    this.service.adicionar({valor: this.valor, destino: this.destino}).subscribe(resultado => {
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.log(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
