import { IEntity } from "src/app/interfaces/entity.interface";

export class FoundEntityDTO {
  data: IEntity;
  source: FontSource;
}

export enum FontSource {
  local = 'Buscador',
  mifin = 'Ministério das Finanças',
  guiche = 'Guichê',
  all = 'Nenhum lado'
}
