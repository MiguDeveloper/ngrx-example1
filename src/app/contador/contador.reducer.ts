import {
  INCREMENTAR,
  DECREMENTAR,
  DIVIDIR,
  MULTIPLICAR,
  actions,
  RESETEAR,
} from "./contador.actions";

export function contadorReducer(state: number = 10, action: actions) {
  switch (action.type) {
    case INCREMENTAR:
      return ++state;
    case DECREMENTAR:
      return --state;
    case MULTIPLICAR:
      return state * action.payload;
    case DIVIDIR:
      return state / action.payload;
    case RESETEAR:
      return 0;
    default:
      return state;
  }
}
