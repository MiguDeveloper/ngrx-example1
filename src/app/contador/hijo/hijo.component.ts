import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.scss"],
})
export class HijoComponent implements OnInit {
  @Input() contador: number;
  @Output() emitContador = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  multiplicar() {
    this.emitContador.emit(this.contador *= 2);
  }

  dividir() {
    this.emitContador.emit(this.contador /= 2);
  }

  resetNieto(event: number){
    this.emitContador.emit(event);
  }
}
