import { EntityType } from "../schemas/entity.schema";

export class CreateEntityDTO {
  name: String;
  type: EntityType;
  identifier: String;
}
