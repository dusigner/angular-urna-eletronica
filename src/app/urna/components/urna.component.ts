import { Component, OnInit } from '@angular/core';

import { UrnaService } from '../services';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.css']
})
export class UrnaComponent implements OnInit {

  private numero1: string;
  private numero2: string;

  constructor(private urnaService: UrnaService) { }

  ngOnInit() {
    this.corrigir();
  }

  /**
   * Botão Corrigir
   * @return void
   */

  corrigir(): void {
    this.numero1 = null;
    this.numero2 = null;
  }

  adicionarNumero(numero: string): void {
    if (this.numero1 === null) {
      this.numero1 = numero;
    } else if (this.numero2 === null) {
        this.numero2 = numero;
    } else {
      console.log('Já votou');
    }
  }

  get displayNumero1(): string {
    if (this.numero1 !== null) {
      return this.numero1;
    }
    return this.numero1;
  }

  get displayNumero2(): string {
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero2;
  }
}
