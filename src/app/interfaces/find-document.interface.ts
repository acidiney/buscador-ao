import { EntityType } from 'src/resources/database/schemas/entity.schema';

export interface FindDocument{
  number: String;
  type: EntityType;
}
