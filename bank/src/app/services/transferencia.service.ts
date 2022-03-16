import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private api = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) { 
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas() {
    return this.httpCliente.get(this.api);
  }

  adicionar(transferencia: Transferencia) {
    this.hidratar(transferencia);

    return this.httpCliente.post(this.api, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
