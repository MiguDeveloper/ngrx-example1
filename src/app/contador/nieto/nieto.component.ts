import { ResetearAction } from './../contador.actions';
import { AppState } from "./../../app.reducer";
import { Store } from "@ngrx/store";
import { EventEmitter } from "@angular/core";
import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-nieto",
  templateUrl: "./nieto.component.html",
  styleUrls: ["./nieto.component.scss"],
})
export class NietoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select("contador")
      .subscribe((contador) => (this.contador = contador));
  }

  reset() {
    const accion = new ResetearAction();
    this.store.dispatch(accion);
  }
}
