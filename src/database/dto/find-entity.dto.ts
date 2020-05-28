import { INif } from "src/search/interfaces/nif.interface";

export class FindedEntityDTO {
  data: INif;
  source: FontSource;
}

export enum FontSource {
  local = 'Buscador',
  mifin = 'Ministério das Finanças'
}
