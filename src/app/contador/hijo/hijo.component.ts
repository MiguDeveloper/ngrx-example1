import { MultiplicarAction, DividirAction } from "./../contador.actions";
import { AppState } from "./../../app.reducer";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.scss"],
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select("contador")
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  }

  dividir() {
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
  }
}
