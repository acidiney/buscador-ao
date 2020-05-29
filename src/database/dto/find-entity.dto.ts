import { IEntity } from "src/search/interfaces/entity.interface";

export class FindedEntityDTO {
  data: IEntity;
  source: FontSource;
}

export enum FontSource {
  local = 'Buscador',
  mifin = 'Ministério das Finanças',
  guiche = 'Guichê',
  all = 'Nenhum lado'
}
