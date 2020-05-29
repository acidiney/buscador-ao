import { EntityType } from 'src/database/schemas/entity.schema';

export interface FindDocument{
  number: String;
  type: EntityType;
}
