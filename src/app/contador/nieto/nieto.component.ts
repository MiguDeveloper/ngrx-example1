import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() emitContador= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.contador = 0
    this.emitContador.emit(this.contador);
  }

}
