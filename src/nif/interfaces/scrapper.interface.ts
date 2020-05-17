import { INif } from "./nif.interface";

export interface ScrapperResponse {
  retorno: ReturnObject;
  data: {
    nif: String,
    nome: String
  };
}

interface ReturnObject {
  cod: Number;
  message: String;
}
