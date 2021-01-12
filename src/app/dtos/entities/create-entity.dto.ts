import { EntityType } from "src/resources/database/schemas/entity.schema";

export class CreateEntityDTO {
  name: String;
  type: EntityType;
  identifier: String;
}
