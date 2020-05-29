interface ReturnObject {
  cod: Number;
  message: String;
}

export interface ScrapperResponse {
  retorno: ReturnObject;
  data: {
    numero: String,
    nome: String
  };
}