import { INif } from "src/nif/interfaces/nif.interface";

export class FindedNifDTO {
  data: INif;
  source: FontSource;
}

export enum FontSource {
  local = 'Buscador',
  mifin = 'Ministério das Finanças',
}
