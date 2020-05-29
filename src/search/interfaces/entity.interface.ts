import { EntityType } from "src/database/schemas/entity.schema";

export interface IEntity {
  name: String;
  nif?: String;
  bi?: String;
}
